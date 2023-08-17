"use strict";var e=require("vue"),n=e.defineComponent({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(n,{emit:t}){const o=n,a=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./EditorTabs-b2305569.js")})))),r=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Preloader-46710ac3.js")})))),l=e.defineAsyncComponent((()=>Promise.resolve().then((function(){return require("./Banner-bfcd6aac.js")})))),i=e.defineAsyncComponent({loader:()=>Promise.resolve().then((function(){return require("./MonacoEditor-7dc16221.js")})).then((function(e){return e.M})),loadingComponent:r,delay:200,errorComponent:l,timeout:1e5}),u=e.ref("edit"),d=e.ref(""),s=e.ref(""),c=e.computed((()=>{const e=d.value.split("\n").length;return o.showMinimap&&2*e>o.editorHeight})),m=e.computed((()=>o.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),p=e=>{"string"==typeof e&&(d.value=e)},f=e=>{e.onDidBlurEditorText instanceof Function&&e.onDidBlurEditorText((()=>{t("update:modelValue",d.value)}))};return e.watch((()=>o.modelValue),(e=>{d.value!==e&&(d.value=e)}),{immediate:!0}),e.watch((()=>o.originalValue),(e=>{s.value!==e&&(s.value=e)}),{immediate:!0}),(n,t)=>(e.openBlock(),e.createElementBlock("div",null,[n.readOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.unref(a),{key:0,onTabchange:t[0]||(t[0]=e=>u.value=e),"active-tab":u.value},null,8,["active-tab"])),"edit"===u.value?(e.openBlock(),e.createBlock(e.unref(i),{onEditorDidMount:f,key:"edit",class:e.normalizeClass(`vh-${n.editorHeight} is-clipped`),value:d.value,onChange:p,language:n.language,options:{minimap:{enabled:c.value},theme:m.value,readOnly:n.readOnly,wordWrap:n.wordWrap,scrollBeyondLastLine:!1},"data-testid":"monaco-editor-edit-section"},null,8,["class","value","language","options"])):e.createCommentVNode("",!0)]))}});exports.default=n;