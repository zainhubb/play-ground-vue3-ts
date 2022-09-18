import{g as e}from"./_commonjsHelpers.b8add541.js";import{d as t,T as r,j as n,k as o,l as i,m as a,p as s,f as l,q as c,s as u,v as d,w as f,x as p,y as h,z as v,A as b,B as m,C as y,D as g,E as x,G as w,H as E,I as C,g as O,J as R,K as S,L as B,M as A,N as T,O as P,P as _,Q as j,R as N,S as k,U as D,o as $,c as z,a as U,t as L,V as H,i as F,_ as q,e as W,W as I,X as M}from"./index.c4d19571.js";function V(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const J=t({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function i(t){e.width?t.style.maxWidth=`${t.offsetWidth}px`:t.style.maxHeight=`${t.offsetHeight}px`,t.offsetWidth}function a(t){e.width?t.style.maxWidth="0":t.style.maxHeight="0",t.offsetWidth;const{onLeave:r}=e;r&&r()}function s(t){e.width?t.style.maxWidth="":t.style.maxHeight="";const{onAfterLeave:r}=e;r&&r()}function l(t){if(t.style.transition="none",e.width){const e=t.offsetWidth;t.style.maxWidth="0",t.offsetWidth,t.style.transition="",t.style.maxWidth=`${e}px`}else if(e.reverse)t.style.maxHeight=`${t.offsetHeight}px`,t.offsetHeight,t.style.transition="",t.style.maxHeight="0";else{const e=t.offsetHeight;t.style.maxHeight="0",t.offsetWidth,t.style.transition="",t.style.maxHeight=`${e}px`}t.offsetWidth}function c(t){var r;e.width?t.style.maxWidth="":e.reverse||(t.style.maxHeight=""),null===(r=e.onAfterEnter)||void 0===r||r.call(e)}return()=>{const u=e.group?r:n;return o(u,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:l,onAfterEnter:c,onBeforeLeave:i,onLeave:a,onAfterLeave:s},t)}}}),K=i("base-wave","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"),Q=t({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){a("-base-wave",K,s(e,"clsPrefix"));const t=l(null),r=l(!1);let n=null;return c((()=>{null!==n&&window.clearTimeout(n)})),{active:r,selfRef:t,play(){null!==n&&(window.clearTimeout(n),r.value=!1,n=null),u((()=>{var e;null===(e=t.value)||void 0===e||e.offsetHeight,r.value=!0,n=window.setTimeout((()=>{r.value=!1,n=null}),1e3)}))}}},render(){const{clsPrefix:e}=this;return o("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=f;const X=p&&"chrome"in window;p&&navigator.userAgent.includes("Firefox");const Y=p&&navigator.userAgent.includes("Safari")&&!X;function Z(e){return h(e,[255,255,255,.16])}function ee(e){return h(e,[0,0,0,.12])}const te=v("n-button-group"),re=d([i("button","\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[b("color",[m("border",{borderColor:"var(--n-border-color)"}),b("disabled",[m("border",{borderColor:"var(--n-border-color-disabled)"})]),y("disabled",[d("&:focus",[m("state-border",{borderColor:"var(--n-border-color-focus)"})]),d("&:hover",[m("state-border",{borderColor:"var(--n-border-color-hover)"})]),d("&:active",[m("state-border",{borderColor:"var(--n-border-color-pressed)"})]),b("pressed",[m("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),b("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[m("border",{border:"var(--n-border-disabled)"})]),y("disabled",[d("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[m("state-border",{border:"var(--n-border-focus)"})]),d("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[m("state-border",{border:"var(--n-border-hover)"})]),d("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[m("state-border",{border:"var(--n-border-pressed)"})]),b("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[m("state-border",{border:"var(--n-border-pressed)"})])]),b("loading","cursor: wait;"),i("base-wave","\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ",[b("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),p&&"MozBoxSizing"in document.createElement("div").style?d("&::moz-focus-inner",{border:0}):null,m("border, state-border","\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "),m("border",{border:"var(--n-border)"}),m("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),m("icon","\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ",[i("icon-slot","\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ",[g({top:"50%",originalTransform:"translateY(-50%)"})]),function({duration:e=".2s",delay:t=".1s"}={}){return[d("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),d("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from","\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "),d("&.fade-in-width-expand-transition-leave-active",`\n overflow: hidden;\n transition:\n opacity ${e} ${G},\n max-width ${e} ${G} ${t},\n margin-left ${e} ${G} ${t},\n margin-right ${e} ${G} ${t};\n `),d("&.fade-in-width-expand-transition-enter-active",`\n overflow: hidden;\n transition:\n opacity ${e} ${G} ${t},\n max-width ${e} ${G},\n margin-left ${e} ${G},\n margin-right ${e} ${G};\n `)]}()]),m("content","\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ",[d("~",[m("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),b("block","\n display: flex;\n width: 100%;\n "),b("dashed",[m("border, state-border",{borderStyle:"dashed !important"})]),b("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),d("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),d("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),ne=t({name:"Button",props:Object.assign(Object.assign({},x.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Y}}),setup(e){const t=l(null),r=l(null),n=l(!1),o=w((()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered)),i=E(te,{}),{mergedSizeRef:a}=C({},{defaultSize:"medium",mergedSize:t=>{const{size:r}=e;if(r)return r;const{size:n}=i;if(n)return n;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),s=O((()=>e.focusable&&!e.disabled)),{inlineThemeDisabled:c,mergedClsPrefixRef:u,mergedRtlRef:d}=R(e),f=x("Button","-button",re,j,e,u),p=S("Button",d,u),h=O((()=>{const t=f.value,{common:{cubicBezierEaseInOut:r,cubicBezierEaseOut:n},self:o}=t,{rippleDuration:i,opacityDisabled:s,fontWeight:l,fontWeightStrong:c}=o,u=a.value,{dashed:d,type:p,ghost:h,text:v,color:b,round:m,circle:y,textColor:g,secondary:x,tertiary:w,quaternary:E,strong:C}=e,O={"font-weight":C?c:l};let R={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const S="tertiary"===p,T="default"===p,P=S?"default":p;if(v){const e=g||b;R={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":e||o[B("textColorText",P)],"--n-text-color-hover":e?Z(e):o[B("textColorTextHover",P)],"--n-text-color-pressed":e?ee(e):o[B("textColorTextPressed",P)],"--n-text-color-focus":e?Z(e):o[B("textColorTextHover",P)],"--n-text-color-disabled":e||o[B("textColorTextDisabled",P)]}}else if(h||d){const e=g||b;R={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":b||o[B("rippleColor",P)],"--n-text-color":e||o[B("textColorGhost",P)],"--n-text-color-hover":e?Z(e):o[B("textColorGhostHover",P)],"--n-text-color-pressed":e?ee(e):o[B("textColorGhostPressed",P)],"--n-text-color-focus":e?Z(e):o[B("textColorGhostHover",P)],"--n-text-color-disabled":e||o[B("textColorGhostDisabled",P)]}}else if(x){const e=T?o.textColor:S?o.textColorTertiary:o[B("color",P)],t=b||e,r="default"!==p&&"tertiary"!==p;R={"--n-color":r?A(t,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":r?A(t,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":r?A(t,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":r?A(t,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":t,"--n-text-color-hover":t,"--n-text-color-pressed":t,"--n-text-color-focus":t,"--n-text-color-disabled":t}}else if(w||E){const e=T?o.textColor:S?o.textColorTertiary:o[B("color",P)],t=b||e;w?(R["--n-color"]=o.colorTertiary,R["--n-color-hover"]=o.colorTertiaryHover,R["--n-color-pressed"]=o.colorTertiaryPressed,R["--n-color-focus"]=o.colorSecondaryHover,R["--n-color-disabled"]=o.colorTertiary):(R["--n-color"]=o.colorQuaternary,R["--n-color-hover"]=o.colorQuaternaryHover,R["--n-color-pressed"]=o.colorQuaternaryPressed,R["--n-color-focus"]=o.colorQuaternaryHover,R["--n-color-disabled"]=o.colorQuaternary),R["--n-ripple-color"]="#0000",R["--n-text-color"]=t,R["--n-text-color-hover"]=t,R["--n-text-color-pressed"]=t,R["--n-text-color-focus"]=t,R["--n-text-color-disabled"]=t}else R={"--n-color":b||o[B("color",P)],"--n-color-hover":b?Z(b):o[B("colorHover",P)],"--n-color-pressed":b?ee(b):o[B("colorPressed",P)],"--n-color-focus":b?Z(b):o[B("colorFocus",P)],"--n-color-disabled":b||o[B("colorDisabled",P)],"--n-ripple-color":b||o[B("rippleColor",P)],"--n-text-color":g||(b?o.textColorPrimary:S?o.textColorTertiary:o[B("textColor",P)]),"--n-text-color-hover":g||(b?o.textColorHoverPrimary:o[B("textColorHover",P)]),"--n-text-color-pressed":g||(b?o.textColorPressedPrimary:o[B("textColorPressed",P)]),"--n-text-color-focus":g||(b?o.textColorFocusPrimary:o[B("textColorFocus",P)]),"--n-text-color-disabled":g||(b?o.textColorDisabledPrimary:o[B("textColorDisabled",P)])};let _={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};_=v?{"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:{"--n-border":o[B("border",P)],"--n-border-hover":o[B("borderHover",P)],"--n-border-pressed":o[B("borderPressed",P)],"--n-border-focus":o[B("borderFocus",P)],"--n-border-disabled":o[B("borderDisabled",P)]};const{[B("height",u)]:j,[B("fontSize",u)]:N,[B("padding",u)]:k,[B("paddingRound",u)]:D,[B("iconSize",u)]:$,[B("borderRadius",u)]:z,[B("iconMargin",u)]:U,waveOpacity:L}=o,H={"--n-width":y&&!v?j:"initial","--n-height":v?"initial":j,"--n-font-size":N,"--n-padding":y||v?"initial":m?D:k,"--n-icon-size":$,"--n-icon-margin":U,"--n-border-radius":v?"initial":y||m?j:z};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":r,"--n-bezier-ease-out":n,"--n-ripple-duration":i,"--n-opacity-disabled":s,"--n-wave-opacity":L},O),R),_),H)})),v=c?T("button",O((()=>{let t="";const{dashed:r,type:n,ghost:o,text:i,color:s,round:l,circle:c,textColor:u,secondary:d,tertiary:f,quaternary:p,strong:h}=e;r&&(t+="a"),o&&(t+="b"),i&&(t+="c"),l&&(t+="d"),c&&(t+="e"),d&&(t+="f"),f&&(t+="g"),p&&(t+="h"),h&&(t+="i"),s&&(t+="j"+V(s)),u&&(t+="k"+V(u));const{value:v}=a;return t+="l"+v[0],t+="m"+n[0],t})),h,e):void 0;return{selfElRef:t,waveElRef:r,mergedClsPrefix:u,mergedFocusable:s,mergedSize:a,showBorder:o,enterPressed:n,rtlEnabled:p,handleMousedown:r=>{var n;s.value||r.preventDefault(),e.nativeFocusBehavior||(r.preventDefault(),e.disabled||s.value&&(null===(n=t.value)||void 0===n||n.focus({preventScroll:!0})))},handleKeydown:t=>{if("Enter"===t.key){if(!e.keyboard||e.loading)return void t.preventDefault();n.value=!0}},handleBlur:()=>{n.value=!1},handleKeyup:t=>{if("Enter"===t.key){if(!e.keyboard)return;n.value=!1}},handleClick:t=>{var n;if(!e.disabled&&!e.loading){const{onClick:o}=e;o&&_(o,t),e.text||null===(n=r.value)||void 0===n||n.play()}},customColorCssVars:O((()=>{const{color:t}=e;if(!t)return null;const r=Z(t);return{"--n-border-color":t,"--n-border-color-hover":r,"--n-border-color-pressed":ee(t),"--n-border-color-focus":r,"--n-border-color-disabled":t}})),cssVars:c?void 0:h,themeClass:null==v?void 0:v.themeClass,onRender:null==v?void 0:v.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:r}=this;null==r||r();const n=P(this.$slots.default,(t=>t&&o("span",{class:`${e}-button__content`},t)));return o(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},"right"===this.iconPlacement&&n,o(J,{width:!0},{default:()=>P(this.$slots.icon,(t=>(this.loading||t)&&o("span",{class:`${e}-button__icon`,style:{margin:N(this.$slots.default)?"0":""}},o(k,null,{default:()=>this.loading?o(D,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):o("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},t)}))))}),"left"===this.iconPlacement&&n,this.text?null:o(Q,{ref:"waveElRef",clsPrefix:e}),this.showBorder?o("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?o("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var oe,ie={exports:{}},ae={exports:{}},se=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},le=se,ce=Object.prototype.toString,ue=(oe=Object.create(null),function(e){var t=ce.call(e);return oe[t]||(oe[t]=t.slice(8,-1).toLowerCase())});function de(e){return e=e.toLowerCase(),function(t){return ue(t)===e}}function fe(e){return Array.isArray(e)}function pe(e){return void 0===e}var he=de("ArrayBuffer");function ve(e){return null!==e&&"object"==typeof e}function be(e){if("object"!==ue(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var me=de("Date"),ye=de("File"),ge=de("Blob"),xe=de("FileList");function we(e){return"[object Function]"===ce.call(e)}var Ee=de("URLSearchParams");function Ce(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),fe(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var Oe,Re=(Oe="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return Oe&&e instanceof Oe}),Se={isArray:fe,isArrayBuffer:he,isBuffer:function(e){return null!==e&&!pe(e)&&null!==e.constructor&&!pe(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||ce.call(e)===t||we(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&he(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:ve,isPlainObject:be,isUndefined:pe,isDate:me,isFile:ye,isBlob:ge,isFunction:we,isStream:function(e){return ve(e)&&we(e.pipe)},isURLSearchParams:Ee,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:Ce,merge:function e(){var t={};function r(r,n){be(t[n])&&be(r)?t[n]=e(t[n],r):be(r)?t[n]=e({},r):fe(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)Ce(arguments[n],r);return t},extend:function(e,t,r){return Ce(t,(function(t,n){e[n]=r&&"function"==typeof t?le(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,o,i,a={};t=t||{};do{for(o=(n=Object.getOwnPropertyNames(e)).length;o-- >0;)a[i=n[o]]||(t[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:ue,kindOfTest:de,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(pe(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:Re,isFileList:xe},Be=Se;function Ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Te=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(Be.isURLSearchParams(t))n=t.toString();else{var o=[];Be.forEach(t,(function(e,t){null!=e&&(Be.isArray(e)?t+="[]":e=[e],Be.forEach(e,(function(e){Be.isDate(e)?e=e.toISOString():Be.isObject(e)&&(e=JSON.stringify(e)),o.push(Ae(t)+"="+Ae(e))})))})),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},Pe=Se;function _e(){this.handlers=[]}_e.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},_e.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},_e.prototype.forEach=function(e){Pe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var je=_e,Ne=Se,ke=Se;function De(e,t,r,n,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}ke.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var $e=De.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){ze[e]={value:e}})),Object.defineProperties(De,ze),Object.defineProperty($e,"isAxiosError",{value:!0}),De.from=function(e,t,r,n,o,i){var a=Object.create($e);return ke.toFlatObject(e,a,(function(e){return e!==Error.prototype})),De.call(a,e.message,t,r,n,o),a.name=e.name,i&&Object.assign(a,i),a};var Ue=De,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},He=Se;var Fe,qe,We,Ie,Me=function(e,t){t=t||new FormData;var r=[];function n(e){return null===e?"":He.isDate(e)?e.toISOString():He.isArrayBuffer(e)||He.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(He.isPlainObject(o)||He.isArray(o)){if(-1!==r.indexOf(o))throw Error("Circular reference detected in "+i);r.push(o),He.forEach(o,(function(r,o){if(!He.isUndefined(r)){var a,s=i?i+"."+o:o;if(r&&!i&&"object"==typeof r)if(He.endsWith(o,"{}"))r=JSON.stringify(r);else if(He.endsWith(o,"[]")&&(a=He.toArray(r)))return void a.forEach((function(e){!He.isUndefined(e)&&t.append(s,n(e))}));e(r,s)}})),r.pop()}else t.append(i,n(o))}(e),t};var Ve,Je,Ke,Qe,Ge,Xe,Ye,Ze,et,tt,rt,nt,ot=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},it=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},at=function(e,t){return e&&!ot(t)?it(e,t):t};function st(){if(Xe)return Ge;Xe=1;var e=Ue;function t(t){e.call(this,null==t?"canceled":t,e.ERR_CANCELED),this.name="CanceledError"}return Se.inherits(t,e,{__CANCEL__:!0}),Ge=t}function lt(){if(tt)return et;tt=1;var e=Se,t=function(){if(qe)return Fe;qe=1;var e=Ue;return Fe=function(t,r,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?r(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}}(),r=function(){if(Ie)return We;Ie=1;var e=Se;return We=e.isStandardBrowserEnv()?{write:function(t,r,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(r)),e.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),e.isString(o)&&s.push("path="+o),e.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}(),n=Te,o=at,i=function(){if(Je)return Ve;Je=1;var e=Se,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Ve=function(r){var n,o,i,a={};return r?(e.forEach(r.split("\n"),(function(r){if(i=r.indexOf(":"),n=e.trim(r.substr(0,i)).toLowerCase(),o=e.trim(r.substr(i+1)),n){if(a[n]&&t.indexOf(n)>=0)return;a[n]="set-cookie"===n?(a[n]?a[n]:[]).concat([o]):a[n]?a[n]+", "+o:o}})),a):a}}(),a=function(){if(Qe)return Ke;Qe=1;var e=Se;return Ke=e.isStandardBrowserEnv()?function(){var t,r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var t=e;return r&&(n.setAttribute("href",t),t=n.href),n.setAttribute("href",t),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(r){var n=e.isString(r)?o(r):r;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}}(),s=Le,l=Ue,c=st(),u=Ze?Ye:(Ze=1,Ye=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""});return et=function(d){return new Promise((function(f,p){var h,v=d.data,b=d.headers,m=d.responseType;function y(){d.cancelToken&&d.cancelToken.unsubscribe(h),d.signal&&d.signal.removeEventListener("abort",h)}e.isFormData(v)&&e.isStandardBrowserEnv()&&delete b["Content-Type"];var g=new XMLHttpRequest;if(d.auth){var x=d.auth.username||"",w=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";b.Authorization="Basic "+btoa(x+":"+w)}var E=o(d.baseURL,d.url);function C(){if(g){var e="getAllResponseHeaders"in g?i(g.getAllResponseHeaders()):null,r={data:m&&"text"!==m&&"json"!==m?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:e,config:d,request:g};t((function(e){f(e),y()}),(function(e){p(e),y()}),r),g=null}}if(g.open(d.method.toUpperCase(),n(E,d.params,d.paramsSerializer),!0),g.timeout=d.timeout,"onloadend"in g?g.onloadend=C:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(C)},g.onabort=function(){g&&(p(new l("Request aborted",l.ECONNABORTED,d,g)),g=null)},g.onerror=function(){p(new l("Network Error",l.ERR_NETWORK,d,g,g)),g=null},g.ontimeout=function(){var e=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded",t=d.transitional||s;d.timeoutErrorMessage&&(e=d.timeoutErrorMessage),p(new l(e,t.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,d,g)),g=null},e.isStandardBrowserEnv()){var O=(d.withCredentials||a(E))&&d.xsrfCookieName?r.read(d.xsrfCookieName):void 0;O&&(b[d.xsrfHeaderName]=O)}"setRequestHeader"in g&&e.forEach(b,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete b[t]:g.setRequestHeader(t,e)})),e.isUndefined(d.withCredentials)||(g.withCredentials=!!d.withCredentials),m&&"json"!==m&&(g.responseType=d.responseType),"function"==typeof d.onDownloadProgress&&g.addEventListener("progress",d.onDownloadProgress),"function"==typeof d.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",d.onUploadProgress),(d.cancelToken||d.signal)&&(h=function(e){g&&(p(!e||e&&e.type?new c:e),g.abort(),g=null)},d.cancelToken&&d.cancelToken.subscribe(h),d.signal&&(d.signal.aborted?h():d.signal.addEventListener("abort",h))),v||(v=null);var R=u(E);R&&-1===["http","https","file"].indexOf(R)?p(new l("Unsupported protocol "+R+":",l.ERR_BAD_REQUEST,d)):g.send(v)}))}}var ct=Se,ut=function(e,t){Ne.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},dt=Ue,ft=Me,pt={"Content-Type":"application/x-www-form-urlencoded"};function ht(e,t){!ct.isUndefined(e)&&ct.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var vt,bt={transitional:Le,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(vt=lt()),vt),transformRequest:[function(e,t){if(ut(t,"Accept"),ut(t,"Content-Type"),ct.isFormData(e)||ct.isArrayBuffer(e)||ct.isBuffer(e)||ct.isStream(e)||ct.isFile(e)||ct.isBlob(e))return e;if(ct.isArrayBufferView(e))return e.buffer;if(ct.isURLSearchParams(e))return ht(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,n=ct.isObject(e),o=t&&t["Content-Type"];if((r=ct.isFileList(e))||n&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return ft(r?{"files[]":e}:e,i&&new i)}return n||"application/json"===o?(ht(t,"application/json"),function(e,t,r){if(ct.isString(e))try{return(t||JSON.parse)(e),ct.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||bt.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&ct.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw dt.from(i,dt.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt?rt:(nt=1,rt=null)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ct.forEach(["delete","get","head"],(function(e){bt.headers[e]={}})),ct.forEach(["post","put","patch"],(function(e){bt.headers[e]=ct.merge(pt)}));var mt,yt,gt=bt,xt=Se,wt=gt;function Et(){return yt?mt:(yt=1,mt=function(e){return!(!e||!e.__CANCEL__)})}var Ct=Se,Ot=function(e,t,r){var n=this||wt;return xt.forEach(r,(function(r){e=r.call(n,e,t)})),e},Rt=Et(),St=gt,Bt=st();function At(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bt}var Tt,Pt,_t=Se,jt=function(e,t){t=t||{};var r={};function n(e,t){return _t.isPlainObject(e)&&_t.isPlainObject(t)?_t.merge(e,t):_t.isPlainObject(t)?_t.merge({},t):_t.isArray(t)?t.slice():t}function o(r){return _t.isUndefined(t[r])?_t.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function i(e){if(!_t.isUndefined(t[e]))return n(void 0,t[e])}function a(r){return _t.isUndefined(t[r])?_t.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function s(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}var l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return _t.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||o,n=t(e);_t.isUndefined(n)&&t!==s||(r[e]=n)})),r};function Nt(){return Pt?Tt:(Pt=1,Tt={version:"0.27.2"})}var kt=Nt().version,Dt=Ue,$t={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){$t[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var zt={};$t.transitional=function(e,t,r){return function(n,o,i){if(!1===e)throw new Dt(function(e,t){return"[Axios v"+kt+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}(o," has been removed"+(t?" in "+t:"")),Dt.ERR_DEPRECATED);return t&&!zt[o]&&(zt[o]=!0),!e||e(n,o,i)}};var Ut,Lt,Ht,Ft,qt,Wt,It=Se,Mt=Te,Vt=je,Jt=function(e){return At(e),e.headers=e.headers||{},e.data=Ot.call(e,e.data,e.headers,e.transformRequest),e.headers=Ct.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ct.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||St.adapter)(e).then((function(t){return At(e),t.data=Ot.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Rt(t)||(At(e),t&&t.response&&(t.response.data=Ot.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Kt=jt,Qt=at,Gt={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Dt("options must be an object",Dt.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],l=void 0===s||a(s,i,e);if(!0!==l)throw new Dt("option "+i+" must be "+l,Dt.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Dt("Unknown option "+i,Dt.ERR_BAD_OPTION)}},validators:$t},Xt=Gt.validators;function Yt(e){this.defaults=e,this.interceptors={request:new Vt,response:new Vt}}Yt.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=Kt(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&Gt.assertOptions(r,{silentJSONParsing:Xt.transitional(Xt.boolean),forcedJSONParsing:Xt.transitional(Xt.boolean),clarifyTimeoutError:Xt.transitional(Xt.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var s=[Jt,void 0];for(Array.prototype.unshift.apply(s,n),s=s.concat(a),i=Promise.resolve(t);s.length;)i=i.then(s.shift(),s.shift());return i}for(var l=t;n.length;){var c=n.shift(),u=n.shift();try{l=c(l)}catch(d){u(d);break}}try{i=Jt(l)}catch(d){return Promise.reject(d)}for(;a.length;)i=i.then(a.shift(),a.shift());return i},Yt.prototype.getUri=function(e){e=Kt(this.defaults,e);var t=Qt(e.baseURL,e.url);return Mt(t,e.params,e.paramsSerializer)},It.forEach(["delete","get","head","options"],(function(e){Yt.prototype[e]=function(t,r){return this.request(Kt(r||{},{method:e,url:t,data:(r||{}).data}))}})),It.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Kt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Yt.prototype[e]=t(),Yt.prototype[e+"Form"]=t(!0)}));var Zt=Se,er=se,tr=Yt,rr=jt;var nr=function e(t){var r=new tr(t),n=er(tr.prototype.request,r);return Zt.extend(n,tr.prototype,r),Zt.extend(n,r),n.create=function(r){return e(rr(t,r))},n}(gt);nr.Axios=tr,nr.CanceledError=st(),nr.CancelToken=function(){if(Lt)return Ut;Lt=1;var e=st();function t(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},t((function(t){n.reason||(n.reason=new e(t),r(n.reason))}))}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},t.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},t.source=function(){var e;return{token:new t((function(t){e=t})),cancel:e}},Ut=t}(),nr.isCancel=Et(),nr.VERSION=Nt().version,nr.toFormData=Me,nr.AxiosError=Ue,nr.Cancel=nr.CanceledError,nr.all=function(e){return Promise.all(e)},nr.spread=Ft?Ht:(Ft=1,Ht=function(e){return function(t){return e.apply(null,t)}}),nr.isAxiosError=function(){if(Wt)return qt;Wt=1;var e=Se;return qt=function(t){return e.isObject(t)&&!0===t.isAxiosError}}(),ae.exports=nr,ae.exports.default=nr;const or=e(ie.exports=ae.exports);or.defaults.baseURL="https://jsonplaceholder.typicode.com/",or.interceptors.request.use((e=>e)),or.interceptors.response.use((e=>e));const ir=e=>function(e,t){return or.get(e,{params:t})}("users",e),ar=q(t({__name:"demo",props:{age:{type:Number,default:0}},setup(e){const t=e;H((e=>({"27a613b5":F(n)})));const r=l(["red","blue","green","yellow","pink","gray","purple","orange"]),n=O((()=>r.value[t.age%r.value.length]));return(t,r)=>($(),z("div",null,[U("p",null,L(e.age),1),U("span",null,L(e.age),1)]))}}),[["__scopeId","data-v-999b015c"]]),sr=M("toggle"),lr=t({__name:"3",setup(e){const t=l(0),r=()=>{t.value++};return ir(),(e,n)=>{const o=ne,i=ar;return $(),z("div",null,[W(o,{onClick:r,type:"info"},{default:I((()=>[sr])),_:1}),W(i,{age:t.value},null,8,["age"])])}}});export{lr as default};
