// @kurkle/color@0.3.2 downloaded from https://ga.jspm.io/npm:@kurkle/color@0.3.2/dist/color.esm.js

function round(n){return n+.5|0}const lim=(n,e,t)=>Math.max(Math.min(n,t),e);function p2b(n){return lim(round(2.55*n),0,255)}function b2p(n){return lim(round(n/2.55),0,100)}function n2b(n){return lim(round(255*n),0,255)}function b2n(n){return lim(round(n/2.55)/100,0,1)}function n2p(n){return lim(round(100*n),0,100)}const n={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15};const e=[..."0123456789ABCDEF"];const h1=n=>e[15&n];const h2=n=>e[(240&n)>>4]+e[15&n];const eq=n=>(240&n)>>4===(15&n);const isShort=n=>eq(n.r)&&eq(n.g)&&eq(n.b)&&eq(n.a);function hexParse(e){var t=e.length;var r;"#"===e[0]&&(4===t||5===t?r={r:255&17*n[e[1]],g:255&17*n[e[2]],b:255&17*n[e[3]],a:5===t?17*n[e[4]]:255}:7!==t&&9!==t||(r={r:n[e[1]]<<4|n[e[2]],g:n[e[3]]<<4|n[e[4]],b:n[e[5]]<<4|n[e[6]],a:9===t?n[e[7]]<<4|n[e[8]]:255}));return r}const alpha=(n,e)=>n<255?e(n):"";function hexString(n){var e=isShort(n)?h1:h2;return n?"#"+e(n.r)+e(n.g)+e(n.b)+alpha(n.a,e):void 0}const t=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hsl2rgbn(n,e,t){const r=e*Math.min(t,1-t);const f=(e,a=(e+n/30)%12)=>t-r*Math.max(Math.min(a-3,9-a,1),-1);return[f(0),f(8),f(4)]}function hsv2rgbn(n,e,t){const f=(r,a=(r+n/60)%6)=>t-t*e*Math.max(Math.min(a,4-a,1),0);return[f(5),f(3),f(1)]}function hwb2rgbn(n,e,t){const r=hsl2rgbn(n,1,.5);let a;if(e+t>1){a=1/(e+t);e*=a;t*=a}for(a=0;a<3;a++){r[a]*=1-e-t;r[a]+=e}return r}function hueValue(n,e,t,r,a){return n===a?(e-t)/r+(e<t?6:0):e===a?(t-n)/r+2:(n-e)/r+4}function rgb2hsl(n){const e=255;const t=n.r/e;const r=n.g/e;const a=n.b/e;const s=Math.max(t,r,a);const b=Math.min(t,r,a);const c=(s+b)/2;let o,i,g;if(s!==b){g=s-b;i=c>.5?g/(2-s-b):g/(s+b);o=hueValue(t,r,a,g,s);o=60*o+.5}return[0|o,i||0,c]}function calln(n,e,t,r){return(Array.isArray(e)?n(e[0],e[1],e[2]):n(e,t,r)).map(n2b)}function hsl2rgb(n,e,t){return calln(hsl2rgbn,n,e,t)}function hwb2rgb(n,e,t){return calln(hwb2rgbn,n,e,t)}function hsv2rgb(n,e,t){return calln(hsv2rgbn,n,e,t)}function hue(n){return(n%360+360)%360}function hueParse(n){const e=t.exec(n);let r=255;let a;if(!e)return;e[5]!==a&&(r=e[6]?p2b(+e[5]):n2b(+e[5]));const s=hue(+e[2]);const b=+e[3]/100;const c=+e[4]/100;a="hwb"===e[1]?hwb2rgb(s,b,c):"hsv"===e[1]?hsv2rgb(s,b,c):hsl2rgb(s,b,c);return{r:a[0],g:a[1],b:a[2],a:r}}function rotate(n,e){var t=rgb2hsl(n);t[0]=hue(t[0]+e);t=hsl2rgb(t);n.r=t[0];n.g=t[1];n.b=t[2]}function hslString(n){if(!n)return;const e=rgb2hsl(n);const t=e[0];const r=n2p(e[1]);const a=n2p(e[2]);return n.a<255?`hsla(${t}, ${r}%, ${a}%, ${b2n(n.a)})`:`hsl(${t}, ${r}%, ${a}%)`}const r={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"};const a={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function unpack(){const n={};const e=Object.keys(a);const t=Object.keys(r);let s,b,c,o,i;for(s=0;s<e.length;s++){o=i=e[s];for(b=0;b<t.length;b++){c=t[b];i=i.replace(c,r[c])}c=parseInt(a[o],16);n[i]=[c>>16&255,c>>8&255,255&c]}return n}let s;function nameParse(n){if(!s){s=unpack();s.transparent=[0,0,0,0]}const e=s[n.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const b=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rgbParse(n){const e=b.exec(n);let t=255;let r,a,s;if(e){if(e[7]!==r){const n=+e[7];t=e[8]?p2b(n):lim(255*n,0,255)}r=+e[1];a=+e[3];s=+e[5];r=255&(e[2]?p2b(r):lim(r,0,255));a=255&(e[4]?p2b(a):lim(a,0,255));s=255&(e[6]?p2b(s):lim(s,0,255));return{r:r,g:a,b:s,a:t}}}function rgbString(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${b2n(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const to=n=>n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055;const from=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function interpolate(n,e,t){const r=from(b2n(n.r));const a=from(b2n(n.g));const s=from(b2n(n.b));return{r:n2b(to(r+t*(from(b2n(e.r))-r))),g:n2b(to(a+t*(from(b2n(e.g))-a))),b:n2b(to(s+t*(from(b2n(e.b))-s))),a:n.a+t*(e.a-n.a)}}function modHSL(n,e,t){if(n){let r=rgb2hsl(n);r[e]=Math.max(0,Math.min(r[e]+r[e]*t,0===e?360:1));r=hsl2rgb(r);n.r=r[0];n.g=r[1];n.b=r[2]}}function clone(n,e){return n?Object.assign(e||{},n):n}function fromObject(n){var e={r:0,g:0,b:0,a:255};if(Array.isArray(n)){if(n.length>=3){e={r:n[0],g:n[1],b:n[2],a:255};n.length>3&&(e.a=n2b(n[3]))}}else{e=clone(n,{r:0,g:0,b:0,a:1});e.a=n2b(e.a)}return e}function functionParse(n){return"r"===n.charAt(0)?rgbParse(n):hueParse(n)}class Color{constructor(n){if(n instanceof Color)return n;const e=typeof n;let t;"object"===e?t=fromObject(n):"string"===e&&(t=hexParse(n)||nameParse(n)||functionParse(n));this._rgb=t;this._valid=!!t}get valid(){return this._valid}get rgb(){var n=clone(this._rgb);n&&(n.a=b2n(n.a));return n}set rgb(n){this._rgb=fromObject(n)}rgbString(){return this._valid?rgbString(this._rgb):void 0}hexString(){return this._valid?hexString(this._rgb):void 0}hslString(){return this._valid?hslString(this._rgb):void 0}mix(n,e){if(n){const t=this.rgb;const r=n.rgb;let a;const s=e===a?.5:e;const b=2*s-1;const c=t.a-r.a;const o=((b*c===-1?b:(b+c)/(1+b*c))+1)/2;a=1-o;t.r=255&o*t.r+a*r.r+.5;t.g=255&o*t.g+a*r.g+.5;t.b=255&o*t.b+a*r.b+.5;t.a=s*t.a+(1-s)*r.a;this.rgb=t}return this}interpolate(n,e){n&&(this._rgb=interpolate(this._rgb,n._rgb,e));return this}clone(){return new Color(this.rgb)}alpha(n){this._rgb.a=n2b(n);return this}clearer(n){const e=this._rgb;e.a*=1-n;return this}greyscale(){const n=this._rgb;const e=round(.3*n.r+.59*n.g+.11*n.b);n.r=n.g=n.b=e;return this}opaquer(n){const e=this._rgb;e.a*=1+n;return this}negate(){const n=this._rgb;n.r=255-n.r;n.g=255-n.g;n.b=255-n.b;return this}lighten(n){modHSL(this._rgb,2,n);return this}darken(n){modHSL(this._rgb,2,-n);return this}saturate(n){modHSL(this._rgb,1,n);return this}desaturate(n){modHSL(this._rgb,1,-n);return this}rotate(n){rotate(this._rgb,n);return this}}function index_esm(n){return new Color(n)}export{Color,b2n,b2p,index_esm as default,hexParse,hexString,hsl2rgb,hslString,hsv2rgb,hueParse,hwb2rgb,lim,n2b,n2p,nameParse,p2b,rgb2hsl,rgbParse,rgbString,rotate,round};

