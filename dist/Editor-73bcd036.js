import{defineComponent as e,defineAsyncComponent as t,ref as a,computed as o,watch as l,openBlock as n,createElementBlock as i,createBlock as d,unref as r,createCommentVNode as u,createElementVNode as m}from"vue";const s=m("div",null," Monaco editor removed ",-1);var p=e({__name:"Editor",props:{modelValue:{default:""},originalValue:{default:""},readOnly:{type:Boolean,default:!1},language:{default:""},showMinimap:{type:Boolean,default:!1},editorHeight:{default:40},editorTheme:{default:""},wordWrap:{default:"on"}},emits:["update:modelValue"],setup(e,{emit:m}){const p=e,v=t((()=>import("./EditorTabs-7be0f4d5.js"))),c=t((()=>import("./Preloader-e17b7349.js"))),f=t((()=>import("./Banner-3286242e.js")));t({loader:()=>import("./MonacoEditor-1f52a2f5.js").then((function(e){return e.M})),loadingComponent:c,delay:200,errorComponent:f,timeout:1e5});const h=a("edit"),g=a(""),b=a("");return o((()=>{const e=g.value.split("\n").length;return p.showMinimap&&2*e>p.editorHeight})),o((()=>p.editorTheme||(document.documentElement.classList.contains("is-dark-theme")?"vs-dark":"vs"))),l((()=>p.modelValue),(e=>{g.value!==e&&(g.value=e)}),{immediate:!0}),l((()=>p.originalValue),(e=>{b.value!==e&&(b.value=e)}),{immediate:!0}),(e,t)=>(n(),i("div",null,[e.readOnly?u("",!0):(n(),d(r(v),{key:0,onTabchange:t[0]||(t[0]=e=>h.value=e),"active-tab":h.value},null,8,["active-tab"])),s]))}});export{p as default};