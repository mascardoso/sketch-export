var that=this;function __skpm_run(e,t){that.context=t;var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/to-markdown.js")}({"./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,t,n){(function(t){function n(e,n,r,i,o,a,c){try{var s=e[a](c),u=s.value}catch(e){return void r(e)}s.done?n(u):t.resolve(u).then(i,o)}e.exports=function(e){return function(){var r=this,i=arguments;return new t(function(t,o){var a=e.apply(r,i);function c(e){n(a,t,o,c,s,"next",e)}function s(e){n(a,t,o,c,s,"throw",e)}c(void 0)})}}}).call(this,n(/*! ./node_modules/promise-polyfill/lib/index.js */"./node_modules/promise-polyfill/lib/index.js"))},"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(/*! ./runtime */"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */function(e,t,n){(function(t){!function(n){"use strict";var r,i=Object.prototype,o=i.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",l="object"==typeof e,f=n.regeneratorRuntime;if(f)l&&(e.exports=f);else{(f=n.regeneratorRuntime=l?e.exports:{}).wrap=_;var d="suspendedStart",h="suspendedYield",p="executing",m="completed",y={},v={};v[c]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(E([])));g&&g!==i&&o.call(g,c)&&(v=g);var S=F.prototype=N.prototype=Object.create(v);x.prototype=S.constructor=F,F.constructor=x,F[u]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,F):(e.__proto__=F,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(S),e},f.awrap=function(e){return{__await:e}},j(k.prototype),k.prototype[s]=function(){return this},f.AsyncIterator=k,f.async=function(e,t,n,r){var i=new k(_(e,t,n,r));return f.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},j(S),S[u]="Generator",S[c]=function(){return this},S.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=E,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return c.type="throw",c.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function _(e,t,n,r){var i=t&&t.prototype instanceof N?t:N,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=w(e,t,n);if("normal"===s.type){if(r=n.done?m:h,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function w(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function N(){}function x(){}function F(){}function j(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var n;this._invoke=function(r,i){function a(){return new t(function(n,a){!function n(r,i,a,c){var s=w(e[r],e,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&o.call(l,"__await")?t.resolve(l.__await).then(function(e){n("next",e,a,c)},function(e){n("throw",e,a,c)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return n("throw",e,a,c)})}c(s.arg)}(r,i,n,a)})}return n=n?n.then(a,a):a()}}function O(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=w(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function E(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}).call(this,n(/*! ./node_modules/promise-polyfill/lib/index.js */"./node_modules/promise-polyfill/lib/index.js"))},"./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! regenerator-runtime */"./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js")},"./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! buffer */"buffer").Buffer;function i(e,t){return e&&e.encoding?String(e.encoding):e?String(e):t}e.exports.constants={F_OK:0,R_OK:4,W_OK:2,X_OK:1},e.exports.accessSync=function(t,n){n|=0;var r=NSFileManager.defaultManager();switch(n){case 0:canAccess=e.exports.existsSync(t);break;case 1:canAccess=Boolean(Number(r.isExecutableFileAtPath(t)));break;case 2:canAccess=Boolean(Number(r.isWritableFileAtPath(t)));break;case 3:canAccess=Boolean(Number(r.isExecutableFileAtPath(t)))&&Boolean(Number(r.isWritableFileAtPath(t)));break;case 4:canAccess=Boolean(Number(r.isReadableFileAtPath(t)));break;case 5:canAccess=Boolean(Number(r.isReadableFileAtPath(t)))&&Boolean(Number(r.isExecutableFileAtPath(t)));break;case 6:canAccess=Boolean(Number(r.isReadableFileAtPath(t)))&&Boolean(Number(r.isWritableFileAtPath(t)));break;case 7:canAccess=Boolean(Number(r.isReadableFileAtPath(t)))&&Boolean(Number(r.isWritableFileAtPath(t)))&&Boolean(Number(r.isExecutableFileAtPath(t)))}if(!canAccess)throw new Error("Can't access "+String(t))},e.exports.appendFileSync=function(t,n,o){if(!e.exports.existsSync(t))return e.exports.writeFileSync(t,n,o);var a=NSFileHandle.fileHandleForWritingAtPath(t);a.seekToEndOfFile();var c=i(o,"utf8"),s=r.from(n,"NSData"===c||"buffer"===c?void 0:c).toNSData();a.writeData(s)},e.exports.chmodSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFilePosixPermissions:t},e,n),null!==n.value())throw new Error(n.value())},e.exports.copyFileSync=function(e,t,n){var r=MOPointer.alloc().init();if(NSFileManager.defaultManager().copyItemAtPath_toPath_error(e,t,r),null!==r.value())throw new Error(r.value())},e.exports.existsSync=function(e){var t=NSFileManager.defaultManager();return Boolean(Number(t.fileExistsAtPath(e)))},e.exports.linkSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().linkItemAtPath_toPath_error(e,t,n),null!==n.value())throw new Error(n.value())},e.exports.mkdirSync=function(e,t){t=t||511;var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(e,!1,{NSFilePosixPermissions:t},n),null!==n.value())throw new Error(n.value())},e.exports.mkdtempSync=function(t){var n=t+function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}();return e.exports.mkdirSync(n),n},e.exports.readdirSync=function(e){for(var t=NSFileManager.defaultManager().subpathsAtPath(e),n=[],r=0;r<t.length;r++)n.push(String(t[r]));return n},e.exports.readFileSync=function(e,t){var n=i(t,"buffer"),o=NSFileManager.defaultManager().contentsAtPath(e),a=r.from(o);return"buffer"===n?a:"NSData"===n?a.toNSData():a.toString(n)},e.exports.readlinkSync=function(e){var t=MOPointer.alloc().init(),n=NSFileManager.defaultManager().destinationOfSymbolicLinkAtPath_error(e,t);if(null!==t.value())throw new Error(t.value());return String(n)},e.exports.realpathSync=function(e){return String(NSString.stringByResolvingSymlinksInPath(e))},e.exports.renameSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().moveItemAtPath_toPath_error(e,t,n),null!==n.value())throw new Error(n.value())},e.exports.rmdirSync=function(e){var t=MOPointer.alloc().init();if(NSFileManager.defaultManager().removeItemAtPath_error(e,t),null!==t.value())throw new Error(t.value())},e.exports.statSync=function(e){var t=MOPointer.alloc().init(),n=NSFileManager.defaultManager().attributesOfItemAtPath_error(e,t);if(null!==t.value())throw new Error(t.value());return{dev:String(n.NSFileDeviceIdentifier),mode:n.NSFileType|n.NSFilePosixPermissions,nlink:Number(n.NSFileReferenceCount),uid:String(n.NSFileOwnerAccountID),gid:String(n.NSFileGroupOwnerAccountID),size:Number(n.NSFileSize),atimeMs:1e3*Number(n.NSFileModificationDate.timeIntervalSince1970()),mtimeMs:1e3*Number(n.NSFileModificationDate.timeIntervalSince1970()),ctimeMs:1e3*Number(n.NSFileModificationDate.timeIntervalSince1970()),birthtimeMs:1e3*Number(n.NSFileCreationDate.timeIntervalSince1970()),atime:new Date(1e3*Number(n.NSFileModificationDate.timeIntervalSince1970())+.5),mtime:new Date(1e3*Number(n.NSFileModificationDate.timeIntervalSince1970())+.5),ctime:new Date(1e3*Number(n.NSFileModificationDate.timeIntervalSince1970())+.5),birthtime:new Date(1e3*Number(n.NSFileCreationDate.timeIntervalSince1970())+.5),isBlockDevice:function(){return n.NSFileType===NSFileTypeBlockSpecial},isCharacterDevice:function(){return n.NSFileType===NSFileTypeCharacterSpecial},isDirectory:function(){return n.NSFileType===NSFileTypeDirectory},isFIFO:function(){return!1},isFile:function(){return n.NSFileType===NSFileTypeRegular},isSocket:function(){return n.NSFileType===NSFileTypeSocket},isSymbolicLink:function(){return n.NSFileType===NSFileTypeSymbolicLink}}},e.exports.symlinkSync=function(e,t){var n=MOPointer.alloc().init();NSFileManager.defaultManager().createSymbolicLinkAtPath_withDestinationPath_error(t,e,n);if(null!==n.value())throw new Error(n.value())},e.exports.truncateSync=function(e,t){var n=NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);n.truncateFileAtOffset(t||0),n.closeFile()},e.exports.unlinkSync=function(e){var t=MOPointer.alloc().init();NSFileManager.defaultManager().removeItemAtPath_error(e,t);if(null!==t.value())throw new Error(t.value())},e.exports.utimesSync=function(e,t,n){var r=MOPointer.alloc().init();NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFileModificationDate:t},e,r);if(null!==r.value())throw new Error(r.value())},e.exports.writeFileSync=function(e,t,n){var o=i(n,"utf8");r.from(t,"NSData"===o||"buffer"===o?void 0:o).toNSData().writeToFile_atomically(e,!0)}},"./node_modules/@skpm/timers/immediate.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/timers/immediate.js ***!
  \************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./timeout */"./node_modules/@skpm/timers/timeout.js");e.exports={setImmediate:function(e,t,n,i,o,a,c,s,u,l,f){return r.setTimeout(e,0,t,n,i,o,a,c,s,u,l,f)},clearImmediate:function(e){return r.clearTimeout(e)}}},"./node_modules/@skpm/timers/test-if-fiber.js":
/*!****************************************************!*\
  !*** ./node_modules/@skpm/timers/test-if-fiber.js ***!
  \****************************************************/
/*! no static exports found */function(e,t){e.exports=function(){return"undefined"!=typeof coscript&&coscript.createFiber}},"./node_modules/@skpm/timers/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/@skpm/timers/timeout.js ***!
  \**********************************************/
/*! no static exports found */function(e,t,n){var r,i,o=[];if(n(/*! ./test-if-fiber */"./node_modules/@skpm/timers/test-if-fiber.js")()){o=[];r=function(e,t,n,r,i,a,c,s,u,l,f,d){var h=o.length;return o.push(coscript.scheduleWithInterval_jsFunction((t||0)/1e3,function(){e(n,r,i,a,c,s,u,l,f,d)})),h},i=function(e){var t=o[e];t&&(t.cancel(),o[e]=void 0)}}else r=function(e,t,n,r,a,c,s,u,l,f,d,h){coscript.shouldKeepAround=!0;var p=o.length;return o.push(!0),coscript.scheduleWithInterval_jsFunction((t||0)/1e3,function(){o[p]&&e(n,r,a,c,s,u,l,f,d,h),i(p),o.every(function(e){return!e})&&(coscript.shouldKeepAround=!1)}),p},i=function(e){o[e]=!1};e.exports={setTimeout:r,clearTimeout:i}},"./node_modules/cocoascript-class/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SuperCall=void 0,t.default=function(e){const t=e.superclass||NSObject,n=(e.className||e.classname||"ObjCClass")+NSUUID.UUID().UUIDString(),o=new Set(["className","classname","superclass"]);var a=MOClassDescription.allocateDescriptionForClassWithName_superclass_(n,t);const c=[];for(var s in e){const t=e[s];if("function"==typeof t&&"init"!==s){var u=NSSelectorFromString(s);a.addInstanceMethodWithSelector_function_(u,t)}else o.has(s)||(c.push(s),a.addInstanceVariableWithName_typeEncoding(s,"@"))}return a.addInstanceMethodWithSelector_function_(NSSelectorFromString("init"),function(){const t=i.call(this);return c.map(n=>{Object.defineProperty(t,n,{get:()=>(function(e,t){const n=MOPointer.new();return(0,r.object_getInstanceVariable)(e,t,n),n.value().retain().autorelease()})(t,n),set(e){(0,r.object_setInstanceVariable)(t,n,e)}}),t[n]=e[n]}),"function"==typeof e.init&&e.init.call(this),t}),a.registerClass()};var r=n(/*! ./runtime.js */"./node_modules/cocoascript-class/lib/runtime.js");t.SuperCall=r.SuperCall;const i=(0,r.SuperCall)(NSStringFromSelector("init"),[],{type:"@"})},"./node_modules/cocoascript-class/lib/runtime.js":
/*!*******************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/runtime.js ***!
  \*******************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SuperCall=function(e,t,n){const i=o("objc_msgSendSuper",[{type:"^"+r},{type:":"},...t],n);return function(...t){const n=function(e,t){return function e(t){if("object"!=typeof t||0==Object.keys(t).length)return t;const n=Object.keys(t)[0];const r=t[n];const i=MOStruct.structureWithName_memberNames_runtime(n,Object.keys(r),Mocha.sharedRuntime());Object.keys(r).map(t=>{i[t]=e(r[t])});return i}({objc_super:{receiver:e,super_class:t}})}(this,this.superclass()),r=MOPointer.alloc().initWithValue_(n);return i(r,e,...t)}},t.CFunc=o;const r='{objc_super="receiver"@"super_class"#}';function i(e,t){const n=NSMutableDictionary.dictionary();n.o=e,Object.keys(t).map(e=>n.setValue_forKeyPath(t[e],"o."+e))}function o(e,t,n){function r(e){if(!e)return null;const t=MOBridgeSupportArgument.alloc().init();return i(t,{type64:e.type}),t}const o=MOBridgeSupportFunction.alloc().init();return i(o,{name:e,arguments:t.map(r),returnValue:r(n)}),o}t.object_getInstanceVariable=o("object_getInstanceVariable",[{type:"@"},{type:"*"},{type:"^@"}],{type:"^{objc_ivar=}"}),t.object_setInstanceVariable=o("object_setInstanceVariable",[{type:"@"},{type:"*"},{type:"@"}],{type:"^{objc_ivar=}"});!function(e,t){const n=MOBridgeSupportController.sharedController().valueForKey("symbols");if(!n)throw Error("Something has changed within bridge support so we can't add our definitions");if(null!==n[e])return;const r=MOBridgeSupportStruct.alloc().init();i(r,{name:e,type:t.type}),n[e]=r}("objc_super",{type:r})},"./node_modules/promise-polyfill/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/lib/index.js ***!
  \****************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(t,n){var r=t;function i(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}else(1===e._state?c:s)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(i);return a(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},o.all=function(e){return new o(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var i=r.length;function o(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(t){o(e,t)},n)}r[e]=a,0==--i&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)o(a,r[a])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof n&&function(e){n(e)}||function(e){r(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},e.exports=o}).call(this,n(/*! ./node_modules/@skpm/timers/timeout.js */"./node_modules/@skpm/timers/timeout.js").setTimeout,n(/*! ./node_modules/@skpm/timers/immediate.js */"./node_modules/@skpm/timers/immediate.js").setImmediate)},"./node_modules/sketch-polyfill-fetch/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sketch-polyfill-fetch/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */function(e,t,n){(function(t){var r,i,o=n(/*! cocoascript-class */"./node_modules/cocoascript-class/lib/index.js").default;try{r=n(/*! buffer */"buffer").Buffer}catch(e){}e.exports=function(e,n){var a;n=n||{};try{a=coscript.createFiber()}catch(e){coscript.shouldKeepAround=!0}return new t(function(c,s){var u,l=NSURL.alloc().initWithString(e),f=NSMutableURLRequest.requestWithURL(l);(f.setHTTPMethod(n.method||"GET"),Object.keys(n.headers||{}).forEach(function(e){f.setValue_forHTTPHeaderField(n.headers[e],e)}),n.body)&&("string"==typeof n.body?u=NSString.alloc().initWithString(n.body).dataUsingEncoding(NSUTF8StringEncoding):r&&r.isBuffer(n.body)?u=n.body.toNSData():n.body.isKindOfClass&&1==n.body.isKindOfClass(NSData)?u=n.body:(u=NSJSONSerialization.dataWithJSONObject_options_error(n.body,NSJSONWritingPrettyPrinted,void 0),f.setValue_forHTTPHeaderField(""+u.length(),"Content-Length")),f.setHTTPBody(u));if(n.cache)switch(n.cache){case"reload":case"no-cache":case"no-store":f.setCachePolicy(1);case"force-cache":f.setCachePolicy(2);case"only-if-cached":f.setCachePolicy(3)}n.credentials||f.setHTTPShouldHandleCookies(!1),i||(i=o({classname:"FetchPolyfillDelegate",data:null,httpResponse:null,fiber:null,callbacks:null,"connectionDidFinishLoading:":function(e){this.callbacks.succeed(this.httpResponse,this.data),this.fiber?this.fiber.cleanup():coscript.shouldKeepAround=!1},"connection:didReceiveResponse:":function(e,t){this.httpResponse=t,this.data=NSMutableData.alloc().init()},"connection:didFailWithError:":function(e,t){this.callbacks.fail(t),this.fiber?this.fiber.cleanup():coscript.shouldKeepAround=!1},"connection:didReceiveData:":function(e,t){this.data.appendData(t)}}));var d=!1,h=i.new();h.callbacks=NSDictionary.dictionaryWithDictionary({succeed:function(e,n){d=!0,c(function e(n,i){for(var o,a=[],c=[],s={},u=0;u<n.allHeaderFields().allKeys().length;u++){var l=n.allHeaderFields().allKeys()[u].toLowerCase(),f=String(n.allHeaderFields()[l]);a.push(l),c.push([l,f]),o=s[l],s[l]=o?o+","+f:f}return{ok:1==(n.statusCode()/200|0),status:Number(n.statusCode()),statusText:NSHTTPURLResponse.localizedStringForStatusCode(n.statusCode()),useFinalURL:!0,url:String(n.URL().absoluteString()),clone:e.bind(this,n,i),text:function(){return new t(function(e,t){const n=NSString.alloc().initWithData_encoding(i,NSASCIIStringEncoding);n?e(n):t(new Error("Couldn't parse body"))})},json:function(){return new t(function(e,t){var n=NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding);n?e(JSON.parse(n)):t(new Error("Could not parse JSON because it is not valid UTF-8 data."))})},blob:function(){return t.resolve(i)},arrayBuffer:function(){return t.resolve(r.from(i))},headers:{keys:function(){return a},entries:function(){return c},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}}(e,n))},fail:function(e){d=!0,s(e)}}),h.fiber=a;var p=NSURLConnection.alloc().initWithRequest_delegate(f,h);a&&a.onCleanup(function(){d||p.cancel()})})}}).call(this,n(/*! ./node_modules/promise-polyfill/lib/index.js */"./node_modules/promise-polyfill/lib/index.js"))},"./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),function(e){var r,i,o=n(/*! @babel/runtime/regenerator */"./node_modules/@babel/runtime/regenerator/index.js"),a=n.n(o),c=n(/*! @babel/runtime/helpers/asyncToGenerator */"./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=n.n(c),u=n(/*! @skpm/fs */"./node_modules/@skpm/fs/index.js"),l=n.n(u),f=n(/*! ./parse-layers/parse */"./src/parse-layers/parse.js"),d=n(/*! sketch/ui */"sketch/ui"),h=n(/*! sketch/dom */"sketch/dom"),p=[];t.default=function(t,n,o){var c=h.fromNative(t.document).selectedPage,u=[];(p=c.layers).map(function(e){"Artboard"===e.type&&u.push(e.name)});var m=function(){var e=t.plugin.urlForResourceNamed("icon.png").path();return NSImage.alloc().initByReferencingFile(e)},y=function(){var e=s()(a.a.mark(function e(t,r,i,c){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.default)(t,r,i,n);case 2:return s=e.sent,e.next=5,v(i,c,s);case 5:return d.alert("Export complete.","🎉🎉 ".concat(r," was successfully exported to ").concat(o,".")),e.abrupt("return",s);case 7:case"end":return e.stop()}},e,this)}));return function(t,n,r,i){return e.apply(this,arguments)}}(),v=function(e,t,n){l.a.writeFileSync("".concat(e).concat(t),n,"utf8")},b=function(t){e("https://file.io",{method:"POST",body:"text=".concat(t)}).then(function(e){return e.json()}).then(function(e){return function(e){var t=COSAlertWindow.new();t.setMessageText("Preview ".concat(o," online")),t.setIcon(m()),t.addButtonWithTitle("Go"),t.addButtonWithTitle("Cancel");var r,i=NSView.alloc().initWithFrame(NSMakeRect(0,0,300,0));t.addAccessoryView(i),"1000"==t.runModal()&&("md"===n?r="https://stackedit.io/viewer#!url=":"json"===n&&(r="https://jsoneditoronline.org/?url="),NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("".concat(r).concat(e))))}(e.link)}).catch(function(e){return d.alert("❌","Something occured while creating the preview - ".concat(e,"."))})};0===u.length?d.message("❌ You have no artboards in your page. You need at least one."):function(e,t){var a=COSAlertWindow.new();a.setMessageText("Export to ".concat(o)),a.setIcon(m()),a.addButtonWithTitle("Ok"),a.addButtonWithTitle("Cancel");var c=NSView.alloc().initWithFrame(NSMakeRect(0,0,300,130));a.addAccessoryView(c);var s=NSTextField.alloc().initWithFrame(NSMakeRect(0,110,300,22));s.setStringValue("Select an artboard"),s.editable=!1,s.selectable=!1,s.bezeled=!1,s.drawsBackground=!1;var u=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,80,150,22));t.map(function(e){u.addItemWithTitle(e)});var l=NSButton.alloc().initWithFrame(NSMakeRect(0,20,300,22));l.setButtonType(NSSwitchButton),l.setBezelStyle(0),l.setTitle("Preview the generated ".concat(o," online"));var f=NSTextField.alloc().initWithFrame(NSMakeRect(18,0,300,22));f.setStringValue("(images won't be uploaded / visible)"),f.setFont(NSFont.systemFontOfSize_(10)),f.editable=!1,f.selectable=!1,f.bezeled=!1,f.drawsBackground=!1,c.addSubview(s),c.addSubview(u),c.addSubview(l),c.addSubview(f),"1000"==a.runModal()&&(r=t[u.indexOfSelectedItem()],i=1==l.stringValue(),function(e,t,r){var i=NSSavePanel.savePanel();if(i.allowedFileTypes=["".concat(n)],i.runModal()==NSFileHandlingPanelOKButton){var o="".concat(i.nameFieldStringValue(),".").concat(n),a=i.URL().path().replace(o,"");try{y(e,t,a,o).then(function(e){r&&b(e)})}catch(e){d.alert("❌","Something went wrong - ".concat(e,"."))}}}(e,r,i))}(p,u.reverse())}}.call(this,n(/*! ./node_modules/sketch-polyfill-fetch/lib/index.js */"./node_modules/sketch-polyfill-fetch/lib/index.js"))},"./src/parse-layers/json.js":
/*!**********************************!*\
  !*** ./src/parse-layers/json.js ***!
  \**********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./utils */"./src/parse-layers/utils.js"),i=function(e){return Object(r.isBold)(e)?"bold":Object(r.isItalic)(e)?"italic":Object(r.isStrikeThrough)(e)?"strikethrough":"regular"};t.default=function(e,t,n){return function(e,t,n){var o;switch(e=e.match(/^image-/)?"image":e){case"heading1":case"heading2":case"heading3":case"heading4":o={type:"heading",level:parseInt(e.replace("heading","")),text:t.text.trim()};break;case"blockquote":case"horizontal-rule":o={type:e};break;case"image":Object(r.exportJpg)(t,"".concat(n,"/assets/")),o={type:"image",name:t.name};break;case"list-unordered":case"list-ordered":o={type:e,list:[]};var a="list-unordered"===e?/•\s+/g:/[0-9].\s+/g;t.text.trim().replace(a,"").split(/[\s,]+[\s,]/).forEach(function(e){o.list.push(e)});break;case"paragraph-multi":o={type:e,paragraphs:[],decoration:i(t)},t.text.trim().split("\n").forEach(function(e){e.length>0&&o.paragraphs.push(e)});break;case"paragraph":o={type:e,text:t.text.trim(),decoration:i(t)}}return o}(e,t,n)}},"./src/parse-layers/md.js":
/*!********************************!*\
  !*** ./src/parse-layers/md.js ***!
  \********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./utils */"./src/parse-layers/utils.js"),i=function(e){return Object(r.isBold)(e)?"**":Object(r.isItalic)(e)?"*":Object(r.isStrikeThrough)(e)?"~~":""};t.default=function(e,t,n){return function(e,t,n){var o="";switch(e=e.match(/^image-/)?"image":e){case"heading1":o+="# ".concat(t.text.trim(),"\n");break;case"heading2":o+="## ".concat(t.text.trim(),"\n");break;case"heading3":o+="### ".concat(t.text.trim(),"\n");break;case"heading4":o+="#### ".concat(t.text.trim(),"\n");break;case"blockquote":var a=i(t);o+="> ".concat(a).concat(t.text.trim()).concat(a,"\n\n");break;case"horizontal-rule":o+="***\n\n";break;case"image":Object(r.exportJpg)(t,"".concat(n,"/assets/")),o+="![](./assets/".concat(t.name,".jpg)\n\n");break;case"list-unordered":t.text.trim().replace(/•\s+/g,"").split(/[\s,]+[\s,]/).forEach(function(e,t,n){o+="* ".concat(e,"\n").concat(Object.is(n.length-1,t)?"\n":"")});break;case"list-ordered":t.text.trim().replace(/[0-9].\s+/g,"").split(/[\s,]+[\s,]/).forEach(function(e,t,n){o+="".concat(t+1,". ").concat(e,"\n").concat(Object.is(n.length-1,t)?"\n":"")});break;case"paragraph-multi":var c=i(t);t.text.trim().split("\n").forEach(function(e,t,n){o+="".concat(c).concat(e).concat(c,"\n").concat(Object.is(n.length-1,t)?"\n":"")});break;case"paragraph":var s=i(t);o+="".concat(s).concat(t.text.trim()).concat(s,"\n\n")}return o}(e,t,n)}},"./src/parse-layers/parse.js":
/*!***********************************!*\
  !*** ./src/parse-layers/parse.js ***!
  \***********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! @babel/runtime/regenerator */"./node_modules/@babel/runtime/regenerator/index.js"),i=n.n(r),o=n(/*! @babel/runtime/helpers/asyncToGenerator */"./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),a=n.n(o),c=n(/*! ./md */"./src/parse-layers/md.js"),s=n(/*! ./json */"./src/parse-layers/json.js"),u="",l=[],f=function(){var e=a()(i.a.mark(function e(t,n,r,o){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function e(t){if("Group"!==t.type||t.name.match(/^image-/)){if("md"===o)u+=Object(c.default)(t.name,t,r);else if("json"===o){var n=Object(s.default)(t.name,t,r);n&&l.push(n)}}else t.layers.reverse().map(function(t){e(t)})},e.next=3,t.map(function(e){"Artboard"===e.type&&e.name===n&&e.layers.reverse().map(function(e){a(e)})});case 3:if("md"!==o){e.next=7;break}return e.abrupt("return",u);case 7:if("json"!==o){e.next=9;break}return e.abrupt("return",JSON.stringify(l));case 9:case"end":return e.stop()}},e,this)}));return function(t,n,r,i){return e.apply(this,arguments)}}();t.default=f},"./src/parse-layers/utils.js":
/*!***********************************!*\
  !*** ./src/parse-layers/utils.js ***!
  \***********************************/
/*! exports provided: exportJpg, isBold, isItalic, isStrikeThrough */function(e,t,n){"use strict";n.r(t),n.d(t,"exportJpg",function(){return i}),n.d(t,"isBold",function(){return a}),n.d(t,"isItalic",function(){return c}),n.d(t,"isStrikeThrough",function(){return s});var r=n(/*! sketch/dom */"sketch/dom"),i=function(e,t){r.export(e,{formats:"jpg",output:t,overwriting:!0,scales:"1"})},o=function(e){return e.sketchObject.fontPostscriptName()},a=function(e){return o(e).match(/(Bold|bold)$/)},c=function(e){return o(e).match(/(Italic|italic|Oblique|oblique)$/)},s=function(e){return e.sketchObject.styleAttributes().NSStrikethrough>0}},"./src/to-markdown.js":
/*!****************************!*\
  !*** ./src/to-markdown.js ***!
  \****************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./core */"./src/core.js");t.default=function(e){Object(r.default)(e,"md","markdown")}},buffer:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("buffer")},"sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/dom")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")}});"default"===e&&"function"==typeof n?n(t):n[e](t)}that.onRun=__skpm_run.bind(this,"default");