import{d as t,f as n,g as a,h as e,o,c as l,a as h,i,n as r,F as s,_ as d}from"./index.fe8ccc3b.js";const c=["width","height"],u=d(t({__name:"1",setup(t){const d=n(null),u=a((()=>d.value.getContext("2d"))),g=window.innerWidth>600?600:window.innerWidth,m=g;let f=0,M=0;function v(){f=Math.random()<.5?Math.random()<.5?0:m:m*Math.random(),M=0===f||f===m?g*Math.random():Math.random()<.5?0:g;x({startPoint:{x:f,y:M},length:5,angle:0===M?Math.PI/2:M===g?-Math.PI/2:0==f?0:-Math.PI})}let w=[];let p=0;function x(t,n=0){!function(t){n=t.startPoint,a=P(t),u.value.beginPath(),u.value.moveTo(n.x,n.y),u.value.lineTo(a.x,a.y),u.value.strokeStyle="rgba(0,0,0,0.3)",u.value.stroke();var n,a}(t),(n<5||Math.random()<.5&&n<1e3)&&w.push((()=>x({startPoint:P(t),length:t.length+.1*t.length*(1-2*Math.random()),angle:t.angle+.25*Math.random()},n+1))),(n<5||Math.random()<.5&&n<1e3)&&w.push((()=>x({startPoint:P(t),length:t.length+.1*t.length*(1-2*Math.random()),angle:t.angle-.25*Math.random()},n+1)))}function P(t){return{x:t.startPoint.x+t.length*Math.cos(t.angle),y:t.startPoint.y+t.length*Math.sin(t.angle)}}function y(){w=[],u.value.clearRect(0,0,m,g),v()}function b(){const t=document.createElement("a");t.href=d.value.toDataURL("image/png"),t.download=(new Date).toLocaleString()+".png",t.click()}return function t(){requestAnimationFrame((()=>{p+=1,p%2==0&&function(){const t=[...w];w.length=0,t.forEach((t=>{t()}))}(),t()}))}(),e((()=>{v()})),(t,n)=>(o(),l(s,null,[h("div",{class:"canvas",style:r({height:i(g)+"px",width:i(m)+"px"})},[h("canvas",{ref_key:"el",ref:d,width:i(m),height:i(g)},null,8,c)],4),h("div",{class:"botton"},[h("button",{onClick:y},"redraw"),h("button",{onClick:b},"download")])],64))}}),[["__scopeId","data-v-353e410d"]]);export{u as default};