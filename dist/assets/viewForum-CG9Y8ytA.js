/* empty css               *//* empty css                *//* empty css               *//* empty css                   *//* empty css            *//* empty css               *//* empty css                  *//* empty css              *//* empty css              */import{d as $,o as v,c as g,b as e,t as l,e as u,w as f,h as w,au as T,_ as V,r as _,x as O,X as I,i as r,v as W,f as P,aA as Z,ak as F,F as D,A as B,z as E,y as S,S as ee,a9 as se,al as ae,n as te,ae as oe,a4 as ne,aB as ie,Q as M,ag as le}from"./index-DUL14BUD.js";/* empty css             */import{l as re,f as ce,d as de,h as ue,i as me,j as pe,k as ve,a as _e,m as fe,n as ye}from"./forum-DEP0Z7Sx.js";import{u as R}from"./userStore-ZFrhfHK-.js";import{m as ke}from"./myEditor-B1mTsJqf.js";import"./http-BrEv2jN3.js";const ge={class:"myCardBox"},Ie={class:"title"},Ae={class:"bottom"},we={class:"details"},Ce={class:"details"},he={class:"details"},Le={style:{color:"#a6a6a6"}},xe=$({__name:"forumRecommend",props:{forum:{}},setup(C){const d=C;return(n,s)=>{const t=T;return v(),g("div",ge,[e("span",Ie,l(d.forum.label),1),u(t,{"line-clamp":"3",style:{height:"70px"}},{default:f(()=>[w(l(d.forum.content),1)]),_:1}),e("div",Ae,[e("span",we,[s[0]||(s[0]=e("span",{class:"iconfont icon-like"},null,-1)),e("span",null,l(d.forum.likes),1)]),e("span",Ce,[s[1]||(s[1]=e("span",{class:"iconfont icon-share"},null,-1)),e("span",null,l(d.forum.favorites),1)]),e("span",he,[s[2]||(s[2]=e("span",{class:"iconfont icon-time",style:{color:"#a6a6a6"}},null,-1)),e("span",Le,l(d.forum.createTime),1)])])])}}}),Pe=V(xe,[["__scopeId","data-v-3f44d23a"]]),De={class:"myCardBox"},Se={class:"title"},$e={class:"bottom"},Ve={class:"details"},be={style:{color:"#a6a6a6"}},Fe=$({__name:"forumReply",props:{data:{},postId:{},actionData:{}},emits:["reply"],setup(C,{emit:d}){const n=C,s=_({isViews:1,isLike:n.actionData?.isLike||0,isStar:n.actionData?.isFavorite||0}),t=R(),m=_({likes:n.data.likes,stars:n.data.favorites});O(n,(c,o)=>{console.log(),m.value={likes:o.data.likes,stars:o.data.favorites},s.value={isViews:1,isLike:o.actionData.isLike,isStar:o.actionData.isFavorite}});const h=async()=>{const c=await re(n.postId,n.data.commentId,t.user.id);c.data.code===200?(r.success(c.data.message),s.value.isLike===0?(s.value.isLike=1,m.value.likes++):(s.value.isLike=0,m.value.likes--)):r.error(c.data.message)},L=async()=>{const c=await ce(n.postId,n.data.commentId,t.user.id);c.data.code===200?(s.value.isStar===0?(m.value.stars++,s.value.isStar=1):(m.value.stars--,s.value.isStar=0),r.success(c.data.message)):r.error(c.data.message)};return(c,o)=>{const A=T;return v(),g("div",De,[e("div",Se,"回复给: "+l(n.data.parentUsername),1),u(A,{"line-clamp":"6",style:{"text-align":"left"},innerHTML:n.data.comment},null,8,["innerHTML"]),e("div",$e,[e("div",null,[e("span",{class:I(["details",{active:s.value.isViews}])},[o[1]||(o[1]=e("span",{class:"iconfont icon-eye"},null,-1)),e("span",null,l(n.data.views),1)],2),e("span",{class:I(["details",{active:s.value.isLike}]),onClick:h},[o[2]||(o[2]=e("span",{class:"iconfont icon-like"},null,-1)),e("span",null,l(m.value.likes),1)],2),e("span",{class:I(["details",{active:s.value.isStar}]),onClick:L},[o[3]||(o[3]=e("span",{class:"iconfont icon-star"},null,-1)),e("span",null,l(m.value.stars),1)],2),e("span",{class:"details",onClick:o[0]||(o[0]=y=>c.$emit("reply"))},o[4]||(o[4]=[e("span",{class:"iconfont icon-edit"},null,-1),e("span",null,"回帖",-1)]))]),e("span",Ve,[o[5]||(o[5]=e("span",{class:"iconfont icon-time",style:{color:"#a6a6a6"}},null,-1)),e("span",be,l(n.data.time),1)])])])}}}),Be=V(Fe,[["__scopeId","data-v-2c731569"]]),Ee={class:"publishForumBox"},Me={class:"left"},Te={class:"top"},Re={class:"title"},Ye={class:"details"},ze={class:"time"},Ne={class:"text"},Ue=["innerHTML"],je={class:"operation"},He={class:"button"},Ge={class:"bottom"},Qe={class:"title"},Xe={class:"replyForum"},qe={key:0,style:{display:"flex","justify-content":"center"}},Je={class:"right"},Ke={class:"authorInfo"},Oe={class:"info"},We={class:"username"},Ze={class:"recommend"},es=$({__name:"viewForum",setup(C){const d=ee(),n=R(),s=_(),t=_({isView:1,isLike:0,isStar:0,isAttention:1}),m=_([{commentId:1,isLike:0,isFavorite:0}]),h=async(i=1)=>{const a=await de(parseInt(d.params.id),i);a.data.code===200?(s.value=a.data.data,t.value.isView=1):r.error("获取出错")},L=async()=>{let i=parseInt(d.params.id);const a=await ue(i,n.user.id);a.data.code===200?(r.success(a.data.message),t.value.isLike===0?(t.value.isLike=1,s.value.likes++):(t.value.isLike=0,s.value.likes--)):r.error(a.data.message)},c=async()=>{let i=parseInt(d.params.id);const a=await me(i,n.user.id);a.data.code===200?(r.success(a.data.message),t.value.isStar===0?(t.value.isStar=1,s.value.favorites++):(t.value.isStar=0,s.value.favorites--)):r.error(a.data.message)},o=_(!1),A=_(""),y=_(0),Y=()=>{A.value=s.value.userInfoVo.username,y.value=0,o.value=!0},z=i=>{A.value=i.parentUsername,y.value=i.commentId,o.value=!0},N=async i=>{if(confirm("你确定要发布吗")){if(y.value===0){const p=await fe(s.value.id,{userId:n.user.id,time:M(new Date).format("YYYY-MM-DD hh:mm:ss"),parentCommentId:y.value,comment:i.content});p.data.code===200?r.success(p.data.message):r.error(p.data.message)}else{const p=await ye(s.value.id,y.value,{userId:n.user.id,time:M(new Date).format("YYYY-MM-DD hh:mm:ss"),parentCommentId:y.value,comment:i.content});p.data.code===200?r.success(p.data.message):r.error(p.data.message)}o.value=!1}},U=async()=>{let i=parseInt(d.params.id);const a=await pe(i,n.user.id);a.data.code===200?(t.value.isLike=a.data.data.userActionVo.isLike,t.value.isStar=a.data.data.userActionVo.isFavorite,t.value.isAttention=a.data.data.isAttention,m.value=a.data.data.commentsActionVoArray):r.error(a.data.message)},j=async()=>{const i=await ve(s.value.id,n.user.id);i.data.code===200?(t.value.isAttention===0?t.value.isAttention=1:t.value.isAttention=0,r.success(i.data.message)):r.error(i.data.message)},b=_(),H=async()=>{const i=await _e(n.user.id);i.data.code===200?b.value=i.data.data.recommended_posts:r.error("获取失败")};return W(()=>{h(),U(),H()}),(i,a)=>{const p=se("Timer"),G=ae,x=te,Q=le,X=oe,q=ne,J=ie;return v(),g(D,null,[e("div",Ee,[e("div",Me,[e("div",Te,[e("span",Re,l(s.value?.label),1),e("div",Ye,[e("div",ze,[u(G,{size:"18"},{default:f(()=>[u(p)]),_:1}),e("span",null,l(s.value?.createTime),1)]),e("div",Ne,l(s.value?.views)+"+人浏览了该帖",1)]),e("div",{class:"content",innerHTML:s.value?.content},null,8,Ue),e("div",je,[e("div",{class:I(["view",{active:t.value.isView}])},[a[1]||(a[1]=e("span",{class:"iconfont icon-eye"},null,-1)),e("span",null,l(s.value?.views),1)],2),e("div",{class:I(["like",{active:t.value.isLike}])},[e("span",{onClick:L,class:"iconfont icon-like"}),e("span",null,l(s.value?.likes),1)],2),e("div",{class:I(["star",{active:t.value.isStar}])},[e("span",{onClick:c,class:"iconfont icon-star"}),e("span",null,l(s.value?.favorites),1)],2),e("div",He,[u(x,{text:"primary",plain:"",icon:P(Z),onClick:Y},{default:f(()=>a[2]||(a[2]=[w("回帖")])),_:1},8,["icon"]),u(x,{type:t.value.isAttention?"plain":"danger",icon:P(F),onClick:j},{default:f(()=>[w(l(t.value.isAttention?"取消关注":"关注"),1)]),_:1},8,["type","icon"])])])]),e("div",Ge,[e("span",Qe,l(s.value?.totalComments)+"条相关回帖 ",1),e("div",Xe,[(v(!0),g(D,null,B(s.value?.comments,(k,K)=>(v(),S(Be,{"post-id":s.value.id,key:k.commentId,onReply:ss=>z(k),"action-data":m.value[K],data:k},null,8,["post-id","onReply","action-data","data"]))),128)),s.value?.comments.length===0?(v(),g("div",qe,[u(Q,{description:"无数据"})])):E("",!0),s.value?.comments.length?(v(),S(X,{key:1,style:{display:"flex","justify-content":"center"},background:"","current-page":s.value?.currentPage,"page-size":s.value?.pageSize,layout:"prev, pager, next",total:s.value?.totalComments,onCurrentChange:h},null,8,["current-page","page-size","total"])):E("",!0)])])]),e("div",Je,[e("div",Ke,[u(q,{size:60,src:s.value?.userInfoVo.avatar},{default:f(()=>a[3]||(a[3]=[w("User")])),_:1},8,["src"]),e("div",Oe,[e("span",We,l(s.value?.author),1),e("span",null,l(s.value?.authorPostCount)+"+ 帖子",1)]),u(x,{type:"primary",icon:P(F)},{default:f(()=>a[4]||(a[4]=[w("关注")])),_:1},8,["icon"])]),a[5]||(a[5]=e("span",{class:"more"},"更多相似论坛",-1)),e("div",Ze,[(v(!0),g(D,null,B(b.value,k=>(v(),S(Pe,{forum:k},null,8,["forum"]))),256))])])]),u(J,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=k=>o.value=k),direction:"rtl"},{header:f(()=>[e("h4",null,"回帖给"+l(A.value),1)]),default:f(()=>[u(ke,{"is-reply":"1",onGetContent:N})]),_:1},8,["modelValue"])],64)}}}),ys=V(es,[["__scopeId","data-v-400ab60f"]]);export{ys as default};
