"use strict";var e=require("./entry-77bb4048.js"),r=require("./fold-e405c002.js"),l=require("vue"),t=l.defineComponent({name:"ObjectForm",mixins:[e.m,r.f,e.v],props:{properties:{type:Object,default:function(){return{}}},fieldName:{type:String,default:""},errors:{type:Object,default:function(){return{}}},title:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},required:{type:Array,default:function(){return[]}},level:{type:Number,default:1}},computed:{propertiesRequired:function(){return this.isSelfRequired||Object.keys(this.modelData).length>0}},methods:{isRequired:function(e){return!!this.required.find((function(r){return r===e}))}}});t.render=function(r,t,o,a,n,d){var i=l.resolveComponent("object-form-wrapper"),u=l.resolveComponent("v-field"),c=l.resolveComponent("key-value-pairs"),p=l.resolveComponent("array-input"),s=l.resolveComponent("simple-input");return l.openBlock(),l.createElementBlock("div",{class:l.normalizeClass(["mb-15",{"is-hidden":r.isSelfFolded}])},[(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(Object.keys(r.properties),(function(t,o){return l.openBlock(),l.createElementBlock(l.Fragment,null,["object"===r.properties[t].type?(l.openBlock(),l.createBlock(u,{key:t+"-object",modelValue:r.modelData[t],"onUpdate:modelValue":function(e){return r.modelData[t]=e},name:"".concat(r.fieldName,"/").concat(t),rules:r.ruleObject(r.propertiesRequired&&r.isRequired(t)),label:"".concat(r.properties[t].title),as:""},{default:l.withCtx((function(e){var a=e.field,n=e.handleChange;return[l.createVNode(i,{"model-value":a.value,"field-name":"".concat(r.fieldName,"/").concat(t),"expand-form":r.level<2,"is-last-child":o===Object.keys(r.properties).length-1,level:r.level+1,type:r.properties[t].type,"is-self-required":r.propertiesRequired&&r.isRequired(t),schema:r.properties[t],errors:r.errors,"reference-model":r.referenceModel[t]||{},"onUpdate:modelValue":n},null,8,["model-value","field-name","expand-form","is-last-child","level","type","is-self-required","schema","errors","reference-model","onUpdate:modelValue"])]})),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):"key-value-pairs"===r.properties[t].type?(l.openBlock(),l.createBlock(u,{key:t+"-key-value-pairs",modelValue:r.modelData[t],"onUpdate:modelValue":function(e){return r.modelData[t]=e},name:"".concat(r.fieldName,"/").concat(t),rules:r.ruleObject(r.propertiesRequired&&r.isRequired(t)),label:"".concat(r.properties[t].title),as:""},{default:l.withCtx((function(e){var a=e.field,n=e.handleChange;return[l.createVNode(c,{"model-value":a.value,"field-name":"".concat(r.fieldName,"/").concat(t),"is-last-child":o===Object.keys(r.properties).length-1,type:r.properties[t].type,schema:r.properties[t],errors:r.errors,"reference-model":r.referenceModel[t]||{},"onUpdate:modelValue":n},null,8,["model-value","field-name","is-last-child","type","schema","errors","reference-model","onUpdate:modelValue"])]})),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):"array"===r.properties[t].type?(l.openBlock(),l.createBlock(u,{key:t+"-array",modelValue:r.modelData[t],"onUpdate:modelValue":function(e){return r.modelData[t]=e},name:"".concat(r.fieldName,"/").concat(t),rules:r.ruleArray(r.propertiesRequired&&r.isRequired(t)),label:"".concat(r.properties[t].title),as:""},{default:l.withCtx((function(e){var a=e.field,n=e.handleChange;return[l.createVNode(p,{"model-value":a.value,"field-name":"".concat(r.fieldName,"/").concat(t),"is-last-child":o===Object.keys(r.properties).length-1,type:r.properties[t].type,schema:r.properties[t],errors:r.errors,"reference-model":r.referenceModel[t]||[],"onUpdate:modelValue":n},null,8,["model-value","field-name","is-last-child","type","schema","errors","reference-model","onUpdate:modelValue"])]})),_:2},1032,["modelValue","onUpdate:modelValue","name","rules","label"])):(l.openBlock(),l.createBlock(u,{key:t,modelValue:r.modelData[t],"onUpdate:modelValue":function(e){return r.modelData[t]=e},rules:r.ruleString(r.propertiesRequired&&r.isRequired(t)),name:"".concat(r.fieldName,"/").concat(t),label:"".concat(r.properties[t].title),as:""},{default:l.withCtx((function(o){var a=o.field,n=o.handleChange,d=o.errors,i=o.meta;return[(l.openBlock(),l.createBlock(s,{key:t,"model-value":a.value,type:r.properties[t].type,schema:r.properties[t],"validation-ob":e._({errors:d},i),"reference-model":r.referenceModel[t]||"","onUpdate:modelValue":n},null,8,["model-value","type","schema","validation-ob","reference-model","onUpdate:modelValue"]))]})),_:2},1032,["modelValue","onUpdate:modelValue","rules","name","label"]))],64)})),256))],2)},exports.default=t;