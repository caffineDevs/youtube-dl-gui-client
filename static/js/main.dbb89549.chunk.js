(this["webpackJsonpthorium-mail"]=this["webpackJsonpthorium-mail"]||[]).push([[0],{22:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var c=i(2),a=i.n(c),s=i(15),r=i.n(s),n=(i(22),i(3)),l=i(6),d=i(5),x=i.n(d),j=i(16),o=i(0);var h=function(e){var t=e.formats,i=function(){var e=Object(j.a)(x.a.mark((function e(t,i,c,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,i,c,a){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"bg-gray-100 py-6 w-full",children:Object(o.jsx)("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:Object(o.jsx)("div",{className:"flex flex-col",children:Object(o.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(o.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(o.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(o.jsxs)("table",{className:"min-w-full divide-y divide-gray-200 bg-secondaryBlack text-secondaryRed",children:[Object(o.jsx)("thead",{className:"bg-gray-50",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",className:" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),Object(o.jsx)("th",{scope:"col",className:" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Format"}),Object(o.jsx)("th",{scope:"col",className:" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Size"}),Object(o.jsx)("th",{scope:"col",className:" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"i-tag"}),Object(o.jsx)("th",{scope:"col",className:" text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Download"})]})}),Object(o.jsx)("tbody",{className:" text-center bg-white divide-y divide-gray-200 text-4xl ",children:t.map((function(t,c){return Object(o.jsxs)("tr",{className:"hover:bg-imperialRed hover:text-primaryBlack main-table transition duration-200 ease-in-out",children:[Object(o.jsx)("td",{className:"px-6 py-4 whitespace-nowrap ",children:Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("div",{className:"flex-shrink-0 h-10 w-10"}),Object(o.jsx)("div",{className:"ml-4",children:Object(o.jsxs)("div",{className:"text-sm md:text-lg font-mono font-medium text-gray-900 ",children:[t.videoCodec&&!t.audioCodec&&Object(o.jsx)("span",{children:"video only"}),!t.videoCodec&&t.audioCodec&&Object(o.jsx)("span",{children:"audio only"}),t.videoCodec&&t.audioCodec&&Object(o.jsx)("span",{children:"video + audio"})]})})]})}),Object(o.jsx)("td",{className:"px-6 py-4 whitespace-nowrap ",children:Object(o.jsxs)("div",{className:"text-sm md:text-lg font-mono text-gray-900",children:[t.container," ",t.height?Object(o.jsxs)("span",{children:["(",t.width,"x",t.height,")"]}):null]})}),Object(o.jsx)("td",{className:"px-6 py-4 whitespace-nowrap ",children:Object(o.jsx)("span",{className:"px-2 inline-flex text-sm md:text-lg font-mono leading-5 rounded-full bg-green-100 text-green-800",children:t.contentLength?Math.round(t.contentLength/1024/1024)+" Mb":"-"})}),Object(o.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm md:text-lg font-mono text-gray-500 ",children:t.itag}),Object(o.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm md:text-lg font-mono font-medium ",children:Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsx)("a",{href:t.url,target:"_blank",onClick:function(){i(t.url,e.videoDetails.title+" "+t.quality,t.container,t.mimeType)},download:"filename.mp4",className:"text-indigo-600 hover:text-indigo-900 px-4 y-2 ",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 449.306 449.306",height:"30px",fill:"green",className:"downloadBtn",children:[Object(o.jsx)("g",{children:Object(o.jsx)("g",{children:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z"}),Object(o.jsx)("path",{d:"M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576     c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42     c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09     c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z"})]})})}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{}),Object(o.jsx)("g",{})]})})})})]},c)}))})]})})})})})})})},b=i(17),m=i.n(b);var u=function(){var e=Object(o.jsx)("div",{className:"mt-20 sm:mt-40",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(o.jsx)("g",{transform:"rotate(0 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9230769230769231s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(27.692307692307693 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8461538461538461s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(55.38461538461539 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.7692307692307693s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(83.07692307692308 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6923076923076923s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(110.76923076923077 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6153846153846154s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(138.46153846153845 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5384615384615384s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(166.15384615384616 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.46153846153846156s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(193.84615384615384 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.38461538461538464s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(221.53846153846155 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3076923076923077s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(249.23076923076923 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.23076923076923078s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(276.9230769230769 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.15384615384615385s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(304.61538461538464 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.07692307692307693s",repeatCount:"indefinite"})})}),Object(o.jsx)("g",{transform:"rotate(332.3076923076923 50 50)",children:Object(o.jsx)("rect",{x:"47",y:"18",rx:"3",ry:"3",width:"6",height:"6",fill:"#e63946",children:Object(o.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})]})}),t=Object(c.useState)({inputState:"",data:{formats:[]}}),i=Object(l.a)(t,2),a=i[0],s=i[1],r=Object(c.useState)(!0),d=Object(l.a)(r,2),x=d[0],j=d[1],b=function(){s(Object(n.a)(Object(n.a)({},a),{},{data:{formats:[]}})),j(!1),m.a.post("https://node-ytdl-gui.herokuapp.com/",{url:a.inputState}).then((function(e){s(Object(n.a)(Object(n.a)({},a),{},{data:e.data}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"font-sans text-black min-h-screen bg-white flex flex-col items-center items-start pt-52 justify-start bg-midnisghtBlue mx-5 md:mx-52 xl:mx-96",children:[Object(o.jsxs)("div",{className:"border mb-4 rounded overflow-hidden flex w-full rounded-full border-imperialRed lg:mx-5",children:[Object(o.jsx)("input",{type:"text",value:a.inputState,onChange:function(e){s(Object(n.a)(Object(n.a)({},a),{},{inputState:e.target.value}))},onKeyUp:function(e){"Enter"==e.key&&b()},className:"w-full focus:outline-none px-6 py-3 text-xl border-r bg-primaryBlack text-imperialRed placeholder-imperialRed placeholder-opacity-40",placeholder:"youtube url..."}),Object(o.jsx)("button",{className:"flex items-center justify-center px-4 border-l focus:outline-none",onClick:b,children:Object(o.jsx)("svg",{className:"h-6 w-6 text-grey-dark focus:outline-none border-imperialRed",fill:"#e63946",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})})})]}),a.data&&a.data.formats.length>0?Object(o.jsx)(h,Object(n.a)({},a.data)):x?null:e]})})};i(43);var p=function(){return Object(o.jsx)("div",{className:"App bg-primaryBlack",children:Object(o.jsx)(u,{})})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,45)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.dbb89549.chunk.js.map