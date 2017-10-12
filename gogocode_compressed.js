// Do not edit this file; automatically generated by build.py.
'use strict';

/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://blockly.googlecode.com/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.GogoCode=new Blockly.Generator("GogoCode");Blockly.GogoCode.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.GogoCode.ORDER_ATOMIC=0;Blockly.GogoCode.ORDER_MEMBER=1;Blockly.GogoCode.ORDER_NEW=1;Blockly.GogoCode.ORDER_FUNCTION_CALL=2;Blockly.GogoCode.ORDER_INCREMENT=3;Blockly.GogoCode.ORDER_DECREMENT=3;Blockly.GogoCode.ORDER_LOGICAL_NOT=4;Blockly.GogoCode.ORDER_BITWISE_NOT=4;Blockly.GogoCode.ORDER_UNARY_PLUS=4;Blockly.GogoCode.ORDER_UNARY_NEGATION=4;Blockly.GogoCode.ORDER_TYPEOF=4;Blockly.GogoCode.ORDER_VOID=4;Blockly.GogoCode.ORDER_DELETE=4;Blockly.GogoCode.ORDER_MULTIPLICATION=5;
Blockly.GogoCode.ORDER_DIVISION=5;Blockly.GogoCode.ORDER_MODULUS=5;Blockly.GogoCode.ORDER_ADDITION=6;Blockly.GogoCode.ORDER_SUBTRACTION=6;Blockly.GogoCode.ORDER_BITWISE_SHIFT=7;Blockly.GogoCode.ORDER_RELATIONAL=8;Blockly.GogoCode.ORDER_IN=8;Blockly.GogoCode.ORDER_INSTANCEOF=8;Blockly.GogoCode.ORDER_EQUALITY=9;Blockly.GogoCode.ORDER_BITWISE_AND=10;Blockly.GogoCode.ORDER_BITWISE_XOR=11;Blockly.GogoCode.ORDER_BITWISE_OR=12;Blockly.GogoCode.ORDER_LOGICAL_AND=13;Blockly.GogoCode.ORDER_LOGICAL_OR=14;
Blockly.GogoCode.ORDER_CONDITIONAL=15;Blockly.GogoCode.ORDER_ASSIGNMENT=16;Blockly.GogoCode.ORDER_COMMA=17;Blockly.GogoCode.ORDER_NONE=99;Blockly.GogoCode.INFINITE_LOOP_TRAP=null;
Blockly.GogoCode.init=function(){Blockly.GogoCode.definitions_=Object.create(null);Blockly.GogoCode.functionNames_=Object.create(null);if(Blockly.Variables){Blockly.GogoCode.variableDB_?Blockly.GogoCode.variableDB_.reset():Blockly.GogoCode.variableDB_=new Blockly.Names(Blockly.GogoCode.RESERVED_WORDS_);for(var a=[],b=Blockly.Variables.allVariables(workspace),c=0;c<b.length;c++)a[c]="set "+Blockly.GogoCode.variableDB_.getName(b[c].name,Blockly.Variables.NAME_TYPE)+" 0";Blockly.GogoCode.definitions_.variables=
a.join("\n")}};Blockly.GogoCode.finish=function(a){var b=[],c;for(c in Blockly.GogoCode.definitions_)b.push(Blockly.GogoCode.definitions_[c]);return b.join("\n\n")+"\n\n\n"+a};Blockly.GogoCode.scrubNakedValue=function(a){return a+";\n"};Blockly.GogoCode.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.GogoCode.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=this.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=this.allNestedComments(d))&&(c+=this.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=this.blockToCode(e);return c+b+e};
Blockly.GogoCode.clock_date=function(a){switch(a.getFieldValue("date").toInt()){case 0:var b="seconds";break;case 1:b="minutes";break;case 2:b="hours";break;case 3:b="dow";break;case 4:b="day";break;case 5:b="month";break;case 6:b="year"}return['<span class="c230">'+b+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.display_text=function(a){return'<span class="c230">show "'+a.getFieldValue("text")+'"</span>\n'};
Blockly.GogoCode.display_number=function(a){return'<span class="c230">show '+Blockly.GogoCode.valueToCode(a,"value",Blockly.GogoCode.ORDER_ATOMIC)+"</span>\n"};Blockly.GogoCode.display_movecursor=function(a){a=a.getFieldValue("num");a=isNaN(a)?0:a%32;return'<span class="c230">setpos '+a+"</span>\n"};Blockly.GogoCode.display_clearscreen=function(a){return'<span class="c230">cls</span>\n'};Blockly.GogoCode.recorder_play=function(a){return'<span class="c90">play</span>\n'};
Blockly.GogoCode.recorder_next=function(a){return'<span class="c90">nexttrack</span>\n'};Blockly.GogoCode.recorder_prev=function(a){return'<span class="c90">prevtrack</span>\n'};Blockly.GogoCode.recorder_select=function(a){return'<span class="c90">gototrack '+a.getFieldValue("track")+"</span>\n"};Blockly.GogoCode.recorder_eraseall=function(a){return'<span class="c90">erasetracks</span>\n'};
Blockly.GogoCode.i2c_write=function(a){var b=Blockly.GogoCode.valueToCode(a,"value",Blockly.GogoCode.ORDER_ATOMIC),c=Blockly.GogoCode.valueToCode(a,"reg_addr",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c210">i2cwrite '+Blockly.GogoCode.valueToCode(a,"i2c_addr",Blockly.GogoCode.ORDER_ATOMIC)+" "+c+" "+b+"</span>\n"};
Blockly.GogoCode.i2c_read=function(a){var b=Blockly.GogoCode.valueToCode(a,"reg_addr",Blockly.GogoCode.ORDER_ATOMIC);return['<span class="c210">(i2cread '+Blockly.GogoCode.valueToCode(a,"i2c_addr",Blockly.GogoCode.ORDER_ATOMIC)+" "+b+")</span>",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.key_value=function(a){var b=this.getFieldValue("key_name").toLowerCase();a=Blockly.GogoCode.valueToCode(a,"key_value_input",Blockly.GogoCode.ORDER_ATOMIC);return['<span class="c210">key "'+b+'" = '+a+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.get_int_value_of_key=function(a){return['<span class="c210">intkey '+Blockly.GogoCode.valueToCode(a,"key_name",Blockly.GogoCode.ORDER_ATOMIC)+"</span>",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.key_value_unrestricted=function(a){var b=Blockly.GogoCode.valueToCode(a,"key_name",Blockly.GogoCode.ORDER_ATOMIC);a=Blockly.GogoCode.valueToCode(a,"key_value_input",Blockly.GogoCode.ORDER_ATOMIC);return['<span class="c210">key '+b+" = "+a+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.if_telegram_message=function(a){return['<span class="c210">key "telegram" = '+Blockly.GogoCode.valueToCode(a,"key_value_input",Blockly.GogoCode.ORDER_ATOMIC)+"</span>",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.action_beep=function(){return'<span class="c290">beep</span>\n'};Blockly.GogoCode.action_led=function(){return'<span class="c290">led'+this.getFieldValue("onoff")+"</span>\n"};Blockly.GogoCode.action_wait=function(a){return'<span class="c290">wait '+Blockly.GogoCode.valueToCode(a,"NAME",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};Blockly.GogoCode.action_gettimer=function(){return['<span class="c120">timer</span>',Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.action_reset_timer=function(){return'<span class="c120">resett</span>\n'};Blockly.GogoCode.action_settickrate=function(a){return'<span class="c290">settickrate '+Blockly.GogoCode.valueToCode(a,"NAME",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};Blockly.GogoCode.action_gettickcount=function(){return['<span class="c120">tickcount</span>',Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.action_ticked=function(){return['<span class="c120">(tickcount > 0)</span>',Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.action_cleartick=function(){return'<span class="c120">cleartick</span>\n'};Blockly.GogoCode.action_motor=function(){var a=this.getFieldValue("a"),b=this.getFieldValue("b"),c=this.getFieldValue("c"),d=this.getFieldValue("d");a='<span class="c316">'+("TRUE"==a?"a":"")+("TRUE"==b?"b":"")+("TRUE"==c?"c":"")+("TRUE"==d?"d":"")+",</span> \n";'<span class="c316">,</span> \n'==a&&(a="");return a};
Blockly.GogoCode.action_motor_is_on=function(){var a=this.getFieldValue("a"),b=this.getFieldValue("b"),c=this.getFieldValue("c"),d=this.getFieldValue("d");a='<span class="c316">'+("TRUE"==a?"a":"")+("TRUE"==b?"b":"")+("TRUE"==c?"c":"")+("TRUE"==d?"d":"")+"on?</span> \n";'<span class="c316">on?</span> \n'==a&&(a='<span class="c316">0</span>');return[a,Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.action_motor_is_cw=function(){var a=this.getFieldValue("a"),b=this.getFieldValue("b"),c=this.getFieldValue("c"),d=this.getFieldValue("d");a='<span class="c316">'+("TRUE"==a?"a":"")+("TRUE"==b?"b":"")+("TRUE"==c?"c":"")+("TRUE"==d?"d":"")+"thisway?</span> \n";'<span class="c316">thisway?</span> \n'==a&&(a='<span class="c316">0</span>');return[a,Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.motor_action_turn=function(){return'<span class="c316">'+this.getFieldValue("turn")+"</span> \n"};
Blockly.GogoCode.motor_action_onfor=function(a){return'<span class="c316">onfor '+Blockly.GogoCode.valueToCode(a,"value",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};Blockly.GogoCode.motor_action_thisway=function(){return'<span class="c316">'+this.getFieldValue("clockwise")+"</span> \n"};Blockly.GogoCode.motor_action_rd=function(){return'<span class="c316">rd</span> \n'};
Blockly.GogoCode.motor_action_power=function(a){return'<span class="c316">setpower '+Blockly.GogoCode.valueToCode(a,"power",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};Blockly.GogoCode.servo_seth=function(a){return'<span class="c316">seth '+Blockly.GogoCode.valueToCode(a,"heading",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};Blockly.GogoCode.servo_lt=function(a){return'<span class="c316">lt '+Blockly.GogoCode.valueToCode(a,"heading",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};
Blockly.GogoCode.servo_rt=function(a){return'<span class="c316">rt '+Blockly.GogoCode.valueToCode(a,"heading",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};Blockly.GogoCode.control_true=function(a){return['<span class="c120">true</span> ',Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.control_if=function(){var a=Blockly.GogoCode.valueToCode(this,"condition",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.statementToCode(this,"statement");return'<span class="c120">if '+a+" \n[\n"+b+"\n]</span>\n"};
Blockly.GogoCode.control_ifelse=function(){var a=Blockly.GogoCode.valueToCode(this,"condition",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.statementToCode(this,"if"),c=Blockly.GogoCode.statementToCode(this,"else");return'<span class="c120">ifelse '+a+" \n[\n"+b+"\n] [\n"+c+"\n]</span>\n"};
Blockly.GogoCode.control_if_state_change=function(){var a=Blockly.GogoCode.valueToCode(this,"condition",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.statementToCode(this,"statement");return'<span class="c120">ifstatechange '+a+" \n[\n"+b+"\n]</span>\n"};Blockly.GogoCode.control_waituntil=function(){return'<span class="c120">waituntil [ '+Blockly.GogoCode.valueToCode(this,"CONDITION",Blockly.GogoCode.ORDER_ATOMIC)+" ]</span>\n"};
Blockly.GogoCode.control_repeat=function(){var a=Blockly.GogoCode.valueToCode(this,"times",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.statementToCode(this,"do");return'<span class="c120">repeat '+a+" \n[\n"+b+"\n]</span>\n"};Blockly.GogoCode.control_forever=function(){return'<span class="c120">forever \n[\n'+Blockly.GogoCode.statementToCode(this,"do")+"\n]</span>\n"};
Blockly.GogoCode.control_forever_wait=function(a){var b=Blockly.GogoCode.statementToCode(this,"do");a=Blockly.GogoCode.valueToCode(a,"NAME",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c120">forever \n[\n'+b+'  <span class="c290">wait '+a+"</span>\n]</span>\n"};Blockly.GogoCode.procedure_stop=function(){return'<span class="c290">stop</span>\n'};
Blockly.GogoCode.control_do_every=function(){var a=Blockly.GogoCode.valueToCode(this,"period",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.statementToCode(this,"do");return'<span class="c120">settickrate 1\nforever [\nif tickcount = '+a+" ["+b+"\ncleartick\n]\n]</span>\n"};
Blockly.GogoCode.control_when_ticked=function(){Blockly.GogoCode.valueToCode(this,"period",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c120">forever [\nif tickcount > 0\n['+Blockly.GogoCode.statementToCode(this,"do")+"\ncleartick\n]\n]</span>\n"};Blockly.GogoCode.control_if_ticked=function(){Blockly.GogoCode.valueToCode(this,"period",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c120">if tickcount > 0\n['+Blockly.GogoCode.statementToCode(this,"do")+"\ncleartick\n]\n</span>\n"};
Blockly.GogoCode.input_switch=function(){return['<span class="c290">switch'+this.getFieldValue("switch")+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.input_sensor=function(){return['<span class="c290">sensor'+this.getFieldValue("sensor")+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.text=function(){return['<span class="c290">"'+this.getFieldValue("TEXT")+'"</span>',Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.key_text=function(a){return['<span class="c330">key '+Blockly.GogoCode.valueToCode(a,"key",Blockly.GogoCode.ORDER_ATOMIC).toLowerCase()+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.input__output__storage_setdp=function(){return'<span class="c220">setdp '+Blockly.GogoCode.valueToCode(this,"DP",Blockly.GogoCode.ORDER_ATOMIC)+"</span>\n"};
Blockly.GogoCode.input__output__storage_record=function(){return'<span class="c220">record '+Blockly.GogoCode.valueToCode(this,"value",Blockly.GogoCode.ORDER_ATOMIC)+"</span>\n"};Blockly.GogoCode.input__output__storage_recall=function(){return['<span class="c220">recall</span> ',Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.input__output__storage_send_serial=function(){return'<span class="c250">send '+Blockly.GogoCode.valueToCode(this,"send",Blockly.GogoCode.ORDER_ATOMIC)+"</span> \n"};
Blockly.GogoCode.input__output__storage_new_serial=function(){return['<span class="c250">newserial?</span>',Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.input__output__storage_get_serial=function(){return['<span class="c250">serial</span> ',Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.input__output__storage_new_ir=function(){return['<span class="c250">newir?</span>',Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.input__output__storage_get_ir=function(){return['<span class="c250">ir</span> ',Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.math_number=function(){var a=this.getFieldValue("number");return['<span class="c10">'+(isNaN(a)?0:a)+"</span>",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.math_random=function(){return['<span class="c10">random</span>',Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.math_equal=function(){var a=Blockly.GogoCode.valueToCode(this,"left",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.valueToCode(this,"right",Blockly.GogoCode.ORDER_ATOMIC),c=this.getFieldValue("cond");return['<span class="c10">'+a+" "+c+" "+b+"</span> ",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.math_in_between=function(){var a=Blockly.GogoCode.valueToCode(this,"input",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.valueToCode(this,"lower",Blockly.GogoCode.ORDER_ATOMIC),c=Blockly.GogoCode.valueToCode(this,"upper",Blockly.GogoCode.ORDER_ATOMIC);return['<span class="c10">('+a+" > "+b+") and ("+a+" < "+c+")</span> ",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.math_operator=function(){var a=Blockly.GogoCode.valueToCode(this,"1stNum",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.valueToCode(this,"2ndNum",Blockly.GogoCode.ORDER_ATOMIC),c=this.getFieldValue("op");a=('<span class="c10">( '+a+" "+c+" "+b+" )</span>").split("\u00d7").join("*");a=a.split("\u00f7").join("/");return[a,Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.math_andor=function(){var a=Blockly.GogoCode.valueToCode(this,"left",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.valueToCode(this,"right",Blockly.GogoCode.ORDER_ATOMIC),c=this.getFieldValue("andor");return['<span class="c10">'+a+" "+c+" "+b+"</span> ",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.math_not=function(){return['<span class="c10">not '+Blockly.GogoCode.valueToCode(this,"bool",Blockly.GogoCode.ORDER_ATOMIC)+"</span>",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.send_string_message=function(a){var b=Blockly.GogoCode.valueToCode(a,"message",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c330">sendmessage '+Blockly.GogoCode.valueToCode(a,"topic",Blockly.GogoCode.ORDER_ATOMIC)+"  "+b+"</span>\n"};Blockly.GogoCode.send_number_message=function(a){var b=Blockly.GogoCode.valueToCode(a,"message",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c330">sendmessage '+Blockly.GogoCode.valueToCode(a,"topic",Blockly.GogoCode.ORDER_ATOMIC)+" "+b+"</span>\n"};
Blockly.GogoCode.ifttt_trigger=function(a){var b=Blockly.GogoCode.valueToCode(a,"message",Blockly.GogoCode.ORDER_ATOMIC);a=Blockly.GogoCode.valueToCode(a,"topic",Blockly.GogoCode.ORDER_ATOMIC);a=a.replace(/\"/g,"");return'<span class="c330">sendmessage "@ifttt,'+a+'" '+b+"</span>\n"};
Blockly.GogoCode.telegram_message=function(a){a=Blockly.GogoCode.valueToCode(a,"message",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c330">sendmessage "@telegram,'+this.getFieldValue("message_type").toLowerCase()+'" '+a+"</span>\n"};Blockly.GogoCode.use_sms=function(){return"import commands\n"};
Blockly.GogoCode.send_sms=function(a){var b=Blockly.GogoCode.valueToCode(a,"message",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c330">sendsms '+Blockly.GogoCode.valueToCode(a,"number",Blockly.GogoCode.ORDER_ATOMIC)+" "+b+"</span>\n"};
Blockly.GogoCode.send_email=function(a){var b=Blockly.GogoCode.valueToCode(a,"email",Blockly.GogoCode.ORDER_ATOMIC),c=Blockly.GogoCode.valueToCode(a,"title",Blockly.GogoCode.ORDER_ATOMIC);a=Blockly.GogoCode.valueToCode(a,"body",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c330">sendmail '+b+" "+c+" "+a+"</span>\n"};Blockly.GogoCode.userfid=function(){return'\nimport rfid_sl500\nrfid = rfid_sl500.RFID_Reader()\nrfid.connect("/dev/ttyUSB0")\n'};
Blockly.GogoCode.read_from_rfid=function(){return["rfid.read_String()\n",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.write_to_rfid=function(){Blockly.GogoCode.valueToCode(this,"NAME",Blockly.GogoCode.ORDER_ATOMIC);return'rfid.write_String("string")\n'};Blockly.GogoCode.use_finer_scan=function(){return'import fingerscan\nfp = fingerscan.fingerPrint()\nfp.connect("/dev/ttyACM0")\n'};Blockly.GogoCode.identify_finger=function(){return["fp.identify()\n",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.enroll_finger=function(){return"fp.enrollOneTime()\n"};Blockly.GogoCode.use_camera=function(){return"usecamera\n"};Blockly.GogoCode.close_camera=function(){return"closecamera\n"};Blockly.GogoCode.start_find_face=function(){return"startfindface\n"};Blockly.GogoCode.stop_find_face=function(){return"stopfindface\n"};Blockly.GogoCode.take_snapshot=function(){return"takesnapshot\n"};Blockly.GogoCode.found_face=function(){return["facefound?",Blockly.GogoCode.ORDER_NONE]};
Blockly.GogoCode.camera_is_on=function(){return["cameraison?",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.find_face_is_on=function(){return["isfindface?",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.play_sound=function(a){return"playsound "+Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC)+"\n"};Blockly.GogoCode.stop_sound=function(){return"stopsound\n"};Blockly.GogoCode.say=function(a){return"say "+Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC)+"\n"};
Blockly.GogoCode.show_image=function(a){return"showimage "+Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC)+"\n"};Blockly.GogoCode.hide_image=function(){return"hideimage\n"};Blockly.GogoCode.screen_tapped=function(){return["screentapped?",Blockly.GogoCode.ORDER_NONE]};Blockly.GogoCode.new_record=function(a){return"newrecordfile "+Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC)+" \n"};
Blockly.GogoCode.record_as=function(a){var b=Blockly.GogoCode.valueToCode(a,"expression",Blockly.GogoCode.ORDER_ATOMIC);a=Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC);return"record "+b+" "+a+" \n"};Blockly.GogoCode.show_plot=function(a){return"showlogplot "+Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC)+" \n"};
Blockly.GogoCode.show_plot_expression=function(a){var b=Blockly.GogoCode.valueToCode(a,"expression",Blockly.GogoCode.ORDER_ATOMIC);a=Blockly.GogoCode.valueToCode(a,"string",Blockly.GogoCode.ORDER_ATOMIC);return"showlogplot "+b+" "+a+" \n"};Blockly.GogoCode.data_variable=function(){return['<span class="c330">[:]'+Blockly.GogoCode.variableDB_.getName(this.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE)+"[;]</span>",Blockly.GogoCode.ORDER_ATOMIC]};
Blockly.GogoCode.data_setvariableto=function(){var a=Blockly.GogoCode.valueToCode(this,"VALUE",Blockly.GogoCode.ORDER_ASSIGNMENT)||"0";return'<span class="c330">set '+Blockly.GogoCode.variableDB_.getName(this.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE)+" "+a+"</span>\n"};
Blockly.GogoCode.data_changevariableby=function(){var a=Blockly.GogoCode.valueToCode(this,"VALUE",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.variableDB_.getName(this.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE);return'<span class="c330">set '+b+" "+b+" + "+a+"</span>\n"};
Blockly.GogoCode.variable_decrease_by=function(){var a=Blockly.GogoCode.valueToCode(this,"increment",Blockly.GogoCode.ORDER_ATOMIC),b=Blockly.GogoCode.variableDB_.getName(this.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return'<span class="c330">set '+b+" "+b+" - "+a+"</span>\n"};
Blockly.GogoCode.procedure_procedure=function(){var a=Blockly.GogoCode.statementToCode(this,"statement");return'[p]<span class="c210">to '+this.getFieldValue("pname")+'</span><span class="c0">newline</span>\n[SS]'+a+'<span class="c0">newline</span><span class="c210">end</span>[/p]'};
Blockly.GogoCode.procedures_callreturn=function(a){for(var b=Blockly.GogoCode.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.GogoCode.valueToCode(a,"ARG"+d,Blockly.GogoCode.ORDER_COMMA)||"null";c.join(" ");a=""+b+" "+c.join(" ")+"  ";a=clean(a);return[a,Blockly.GogoCode.ORDER_FUNCTION_CALL]};
Blockly.GogoCode.procedures_defreturn=function(a){var b=Blockly.GogoCode.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.GogoCode.statementToCode(a,"STACK");Blockly.GogoCode.INFINITE_LOOP_TRAP&&(c=Blockly.GogoCode.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.GogoCode.valueToCode(a,"RETURN",Blockly.GogoCode.ORDER_NONE)||"";d&&(d="  output "+d+";\n");for(var e=[],f=0;f<a.arguments_.length;f++)e[f]=":"+Blockly.GogoCode.variableDB_.getName(a.arguments_[f],
Blockly.Variables.NAME_TYPE);f="(main "+b+"["+e.join(", ")+"] {\n"+c+d+"} )";Blockly.GogoCode.scrub_(a,f);f='[p]<span class="c0">newline</span><span class="c0">newline</span>to '+b+" "+e.join(" ")+'<span class="c0">newline</span>\n '+c+'\n<span class="c0">newline</span>'+d+'\n<span class="c0">newline</span>end\n [/p]';Blockly.GogoCode.definitions_[b]=f;return null};Blockly.GogoCode.procedures_defnoreturn=Blockly.GogoCode.procedures_defreturn;
Blockly.GogoCode.procedures_callnoreturn=function(a){for(var b=Blockly.GogoCode.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.GogoCode.valueToCode(a,"ARG"+d,Blockly.GogoCode.ORDER_COMMA)||"null";return b+" "+c.join(" ")+" "};
Blockly.GogoCode.procedures_ifreturn=function(a){a=Blockly.GogoCode.valueToCode(this,"CONDITION",Blockly.GogoCode.ORDER_ATOMIC);var b=Blockly.GogoCode.valueToCode(this,"VALUE",Blockly.GogoCode.ORDER_ATOMIC);return'<span class="c120">if '+a+" \n[\nreturn "+b+"\n]</span>\n"};Blockly.GogoCode.test_condition=function(a){return Blockly.GogoCode.statementToCode(a,"NAME")};Blockly.GogoCode.test_variable=function(a){return a.getFieldValue("var_name")};
Blockly.GogoCode.test_do_sth=function(a){return["..sss.",Blockly.GogoCode.ORDER_NONE]};