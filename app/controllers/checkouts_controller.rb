class CheckoutsController < ApplicationController 
  def create  
    Stripe.api_key="sk_test_51PyRe8KYXg577AEZodAbPtvu3LUPlPL5fM1iOOwjTvkTgXCL6OIevvtRcNRWglvuDqPAaJKJ05YH5zWhE7EPzSm700WeelSXkm"

    cart = params[:cart]
    line_items = cart.map do |item|
      product = Product.find(item["id"])
      product_stock = product.stocks.find{|ps| ps.size == item["size"]}

      if product_stock.amount < item["quantity"].to_i 
        render json: {error: "Not enought stock for #{product.name} in size #{item["size"]}. Only #{product_stock.amount} left. "}, status: 400 

        return 
      end

      {
        quantity: item["quantity"].to_i, 
        price_data: {
          product_data: {
            name: item["name"],
            metadata: {
              product_id: product.id, size: item["size"], product_stock_id: product_stock.id
            }
          },
          currency: "usd",
          unit_amount: item["price"].to_i 
        }
      }
    end

    session = Stripe::Checkout::Session.create(
      mode: "payment", 
      line_items: line_items,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      shipping_address_collection: {
        allowed_countries: ['US','CA']
      }
    )

    render json: {url: session.url }
  end


  def success 
    render :success 
  end

  def cancel 
    render :cancel 
  end
end