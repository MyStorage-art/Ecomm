class WebhooksController < ApplicationController 
  skip_forgery_protection 

  def stripe   
    secret_key = "sk_test_51PyRe8KYXg577AEZodAbPtvu3LUPlPL5fM1iOOwjTvkTgXCL6OIevvtRcNRWglvuDqPAaJKJ05YH5zWhE7EPzSm700WeelSXkm"

    Stripe.api_key = secret_key 
    payload = request.body.read 
    sig_header = request.env["HTTP_STRIPE_SIGNATURE"]
    endpoint_secret = "whsec_e9677ad4f1f6f342bb8965ff56f84cd85f4c2d2814325443598a5da406c4c4cd"

    event = nil  

    begin 
      event  = Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
    rescue  JSON::ParserError => e 
      status 400 
      return 
    rescue  Stripe::SignatureVerificationError => e 
      puts "Webhooks signature verification failed"
      status 400 
      return 
    end 

    case event.type
    when 'checkout.session.completed'
      session = event.data.object 
      shipping_details = session["shipping_details"]
      puts "session: #{shipping_details}"

      if shipping_details.present? 
        address = "#{shipping_details['address']['line1']} #{shipping_details['address']['city']}, #{shipping_details['address']['state']} #{shipping_details['address']['postal_code']}"
      else  
        address = ""
      end 

      order = Order.create!(customer_email: session["customer_details"]["email"], total: session["amount_total"], address: address, full_filled: false)

      full_session = Stripe::Checkout::Session.retrieve({
        id: session.id, 
        expand: ['line_items']
      })
      puts "Fullsession: #{full_session}"
      line_items = full_session.line_items 
      line_items["data"].each do |item| 
        product = Stripe::Product.retrieve(item["price"]["product"])
        product_id = product["metadata"]["product_id"].to_i 

        OrderProduct.create!(order: order, product_id: product_id, quantity: item["quantity"], size: product["metadata"]["size"])

        Stock.find(product["metadata"]["product_stock_id"]).decrement!(:amount, item["quantity"])
      end 
    else  
      puts "Unhandled event type: #{event.type}"
    end 

    render json: {message: 'success'}
  end
end