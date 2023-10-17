import{defineComponent as t,toRefs as e,computed as i,openBlock as o,createElementBlock as a,normalizeStyle as d}from"vue";import*as s from"monaco-editor";var r=t({name:"MonacoEditor",props:{diffEditor:{type:Boolean,default:!1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},original:String,value:String,language:{type:String,default:"javascript"},theme:{type:String,default:"vs"},options:{type:Object,default:()=>({})}},emits:["editorWillMount","editorDidMount","change"],setup(t){const{width:o,height:a}=e(t);return{style:i((()=>({width:o.value.toString().includes("%")?o.value:`${o.value}px`,height:a.value.toString().includes("%")?a.value:`${a.value}px`,"text-align":"left"})))}},mounted(){this.initMonaco()},beforeUnmount(){this.editor&&this.editor.dispose()},methods:{initMonaco(){this.$emit("editorWillMount",this.monaco);const{value:t,language:e,theme:i,options:o}=this;this.editor=s.editor[this.diffEditor?"createDiffEditor":"create"](this.$el,{value:t,language:e,theme:i,...o}),this.diffEditor&&this._setModel(this.value,this.original);const a=this._getEditor();a.onDidChangeModelContent((t=>{const e=a.getValue();this.value!==e&&this.$emit("change",e,t)})),this.$emit("editorDidMount",this.editor)},_setModel(t,e){const{language:i}=this,o=s.editor.createModel(e,i),a=s.editor.createModel(t,i);this.editor.setModel({original:o,modified:a})},_setValue(t){let e=this._getEditor();if(e)return e.setValue(t)},_getValue(){let t=this._getEditor();return t?t.getValue():""},_getEditor(){return this.editor?this.diffEditor?this.editor.getModifiedEditor():this.editor:null},_setOriginal(){const{original:t}=this.editor.getModel();t.setValue(this.original)}},watch:{options:{deep:!0,handler(t){this.editor.updateOptions(t)}},value(){this.value!==this._getValue()&&this._setValue(this.value)},original(){this._setOriginal()},language(){if(this.editor)if(this.diffEditor){const{original:t,modified:e}=this.editor.getModel();s.editor.setModelLanguage(t,this.language),s.editor.setModelLanguage(e,this.language)}else s.editor.setModelLanguage(this.editor.getModel(),this.language)},theme(){s.editor.setTheme(this.theme)}}});r.render=function(t,e,i,s,r,l){return o(),a("div",{class:"monaco-editor-vue3",style:d(t.style)},null,4)};export{r as default};