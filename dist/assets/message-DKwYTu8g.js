import{h as s}from"./http-BrEv2jN3.js";const m=e=>s({url:"/message",method:"GET",params:{userId:e}}),n=(e,o,t,a,r)=>s({url:"/message/addtodo",method:"POST",data:{userId:e,messageId:o,createTime:t,title:a,content:r}}),g=e=>s({url:"/message/info/"+e,method:"GET"}),u=e=>s({url:"/message/todo/"+e,method:"GET"}),h=(e,o,t)=>s({url:"/message/todos",method:"GET",params:{userId:e,year:o,month:t}});export{n as a,g as b,m as c,u as d,h as g};
