"use strict";var e=require("vue");const t={class:"sign-up-notification mb-20"},r={class:"has-text-centered"},n={class:"has-text-danger"},o=e.createElementVNode("p",null,"Oops!! There was an error while loading!",-1);const l={render:function(l,s){return e.openBlock(),e.createElementBlock("div",t,[e.createElementVNode("div",r,[e.createElementVNode("h3",n,[e.renderSlot(l.$slots,"banner-title",{},(()=>[e.createTextVNode("Error!")]))]),e.renderSlot(l.$slots,"default",{},(()=>[o]))])])}};exports.default=l;