import{defineComponent as o,defineAsyncComponent as t,openBlock as e,createElementBlock as r,createElementVNode as n,normalizeClass as a,renderSlot as s,createVNode as l,unref as i,withCtx as f,createCommentVNode as c}from"vue";const p={class:"form-wrapper"},d={key:0,class:"form-footer b-t-1 pt-10 pb-10 pl-20 pr-20 mt-15"};var m=o({__name:"Form",props:{isContainer:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!0},reducePaddingTop:{type:Boolean,default:!1}},setup(o){const m=t((()=>import("./FormFooterControl-eec1f0a9.js")));return(o,t)=>(e(),r("div",p,[n("div",{class:a({"form-content":!o.isContainer,container:o.isContainer})},[s(o.$slots,"default")],2),o.hasFooter?(e(),r("div",d,[n("div",{class:a(["ac-vcentered",{"form-content":!o.isContainer,container:o.isContainer}])},[l(i(m),null,{default:f((()=>[s(o.$slots,"form-left-controls")])),_:3}),l(i(m),null,{default:f((()=>[s(o.$slots,"form-right-controls")])),_:3})],2)])):c("",!0)]))}});export{m as default};