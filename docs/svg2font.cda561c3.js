parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zhWN":[function(require,module,exports) {
"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,l=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Custom=void 0;var l="#icon-size",u=".icon-size-text",c="#icon-color",a=".icon-color-preview",s=function(){function t(){r(this,t),this.sizeRange=null,this.sizeShow=null,this.color=null,this.colorShow=null,this.sheet=null,this.init(),this.initEvent()}return i(t,[{key:"initEvent",value:function(){var e=this;this.sizeRange.addEventListener("input",function(t){var n=e.sizeRange.value;e.sizeShow.innerText=n+"px",e.sheet.removeRule(0),e.sheet.insertRule(".logpresso-icon-item i {font-size: ".concat(n,"px; }"),0)}),this.color.addEventListener("keyup",function(t){var n=e.color.value,r=e.sizeRange.value;e.colorShow.style.background=n,e.sheet.removeRule(0),e.sheet.insertRule(".logpresso-icon-item i {\n\t\t\t\t\tfont-size: ".concat(r,"px;\n\t\t\t\t\tcolor: ").concat(n,";\n\t\t\t\t}"),0)})}},{key:"init",value:function(){this.sizeRange=document.querySelector(l),this.sizeShow=document.querySelector(u),this.color=document.querySelector(c),this.colorShow=document.querySelector(a);var t,n=e(document.styleSheets);try{for(n.s();!(t=n.n()).done;){var r=t.value;"style"===r.title&&(this.sheet=r)}}catch(o){n.e(o)}finally{n.f()}}}]),t}();exports.Custom=s;
},{}],"ROm1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iconFiles=void 0;var s=["airplay.svg","alert-circle.svg","alert-octagon.svg","alert-triangle.svg","align-center.svg","align-justify.svg","align-left.svg","align-right.svg","analysis.svg","anchor.svg","app.svg","arrow-down-left.svg","arrow-down-right.svg","arrow-down.svg","arrow-left.svg","arrow-right.svg","arrow-up-left.svg","arrow-up-right.svg","arrow-up.svg","at-sign.svg","award.svg","bar-chart-2.svg","bar-chart.svg","bell-off.svg","bell.svg","bluetooth.svg","book.svg","bookmark.svg","box.svg","briefcase.svg","burger-menu.svg","calendar-check.svg","calendar-minus.svg","calendar-plus.svg","calendar-x.svg","calendar.svg","camera-off.svg","camera.svg","card-view.svg","cast.svg","check-circle.svg","check-square.svg","check.svg","chevron-down.svg","chevron-left.svg","chevron-right.svg","chevron-up.svg","chevrons-down.svg","chevrons-left.svg","chevrons-right.svg","chevrons-up.svg","chrome.svg","circle.svg","clipboard.svg","cloud-off.svg","cloud.svg","command.svg","compass.svg","copy.svg","corner-down-left.svg","corner-down-right.svg","corner-left-down.svg","corner-left-up.svg","corner-right-down.svg","corner-right-up.svg","corner-up-left.svg","corner-up-right.svg","cpu.svg","crosshair.svg","cursor.svg","database.svg","decision.svg","delete.svg","disc.svg","download-cloud.svg","download.svg","droplet.svg","edit-2.svg","edit-3.svg","edit.svg","export.svg","external-link.svg","eye-off.svg","eye.svg","fast-forward.svg","file-minus.svg","file-plus.svg","file-text.svg","file.svg","film.svg","filter.svg","flag.svg","folder.svg","github.svg","globe.svg","grid-off.svg","grid-on.svg","grid.svg","hash.svg","heart.svg","home.svg","icon-03.svg","icon-35.svg","image.svg","import.svg","inbox.svg","info-circle.svg","input-user.svg","layer-bottom.svg","layer-center.svg","layer-horizontal.svg","layer-left.svg","layer-middle.svg","layer-right.svg","layer-top.svg","layer-vertical.svg","layers.svg","layout.svg","life-buoy.svg","link-2.svg","link.svg","list-ol.svg","list-view.svg","loader.svg","lock.svg","log-in.svg","log-out.svg","lookup.svg","mail.svg","map-pin.svg","map.svg","maximize-2.svg","maximize.svg","message-circle.svg","message-square.svg","mic-off.svg","mic.svg","minimize-2.svg","minimize.svg","minus-circle.svg","minus-square.svg","minus.svg","monitor.svg","moon.svg","more-horizontal.svg","more-vertical.svg","move.svg","music.svg","navigation-2.svg","navigation.svg","octagon.svg","package.svg","pause-circle.svg","pause.svg","percent.svg","pie-chart.svg","play-circle.svg","play.svg","playbook-other.svg","plus-circle.svg","plus-square.svg","plus.svg","power.svg","printer.svg","quarterly.svg","query.svg","question-circle.svg","radio.svg","refresh-cw.svg","refresh-time-ccw.svg","refresh-time-cw.svg","repeat.svg","request-work-1.svg","request-work-2.svg","rewind.svg","rotate-ccw.svg","rotate-cw.svg","rotate-time-ccw.svg","rotate-time-cw.svg","run-query.svg","save.svg","scissors.svg","screen-mode.svg","search.svg","security.svg","server.svg","settings.svg","share-2.svg","shuffle.svg","skip-back.svg","skip-forward.svg","slack.svg","slash-circle.svg","square.svg","star.svg","stop-circle.svg","stopwatch.svg","sun.svg","tag.svg","target.svg","thumbs-down.svg","thumbs-up.svg","ticket.svg","time.svg","toggle-left.svg","toggle-right.svg","trash-2.svg","trash.svg","triangle.svg","type.svg","unlock.svg","upload-cloud.svg","upload.svg","user-check.svg","user-minus.svg","user-plus.svg","user-x.svg","user.svg","users.svg","variable.svg","volume-1.svg","volume-2.svg","volume-x.svg","volume.svg","vpn.svg","watch.svg","wifi.svg","x-circle.svg","x-square.svg","x.svg","zap.svg","zoom-in.svg","zoom-out.svg"];exports.iconFiles=s;
},{}],"E2sd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IconManager=void 0;var e=require("../files");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}var r="logpresso-icon-item",i="lp-icon",c=".search-bar-input",o="copy-target",s=function(){function t(e){n(this,t),this.iconElements=[],this.searchBar=null,this.init(e),this.initEvent()}return a(t,[{key:"initEvent",value:function(){var e=this;this.searchBar.addEventListener("keyup",function(n){""!==e.searchBar.value?e.iconElements.forEach(function(n){var t=n.innerText.indexOf(e.searchBar.value);n.style.display=-1===t?"none":"flex"}):e.iconElements.forEach(function(e){return e.style.display="flex"})}),this.renderTarget.addEventListener("click",function(e){var n=e.target;if(n.classList.contains(o)){var t=document.createElement("textarea");t.value='<i class="lp-icon">'.concat(n.innerText,"</i>"),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}})}},{key:"init",value:function(n){this.searchBar=document.querySelector(c),this.renderTarget=n,this.iconElements=e.iconFiles.map(function(e){var t=document.createElement("div"),a=document.createElement("i"),c=document.createElement("span");t.className=r,a.className=i,a.classList.add(o);var s=e.replace(".svg","");return a.innerHTML=s,c.innerText=s,c.className=o,t.appendChild(a),t.appendChild(c),n.appendChild(t),t})}}]),t}();exports.IconManager=s;
},{"../files":"ROm1"}],"QCba":[function(require,module,exports) {
"use strict";var e=require("./src/custom"),r=require("./src/icon-manager"),n=".logpresso-icon-viewer",o="search-bar-input";window.onload=function(){var o=document.body.querySelector(n);o.innerHTML="";new r.IconManager(o),new e.Custom};
},{"./src/custom":"zhWN","./src/icon-manager":"E2sd"}]},{},["QCba"], null)
//# sourceMappingURL=/lpicons/svg2font.cda561c3.js.map