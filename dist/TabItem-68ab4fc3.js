import{defineComponent as e,openBlock as t,createElementBlock as i,normalizeClass as r,renderSlot as s}from"vue";var a=e({props:{isActive:{type:Boolean,default:!1}}});a.render=function(e,a,o,l,u,c){return t(),i("li",{class:r({"is-active":e.isActive})},[s(e.$slots,"default")],2)};export{a as default};