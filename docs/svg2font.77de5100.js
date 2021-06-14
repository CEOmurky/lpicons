// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/custom.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Custom = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SIZE_RANGE_ID = '#icon-size';
var SIZE_SHOW_CLASS = '.icon-size-text';
var COLOR_ID = '#icon-color';
var COLOR_SHOW_CLASS = '.icon-color-preview';

var Custom = /*#__PURE__*/function () {
  function Custom() {
    _classCallCheck(this, Custom);

    this.sizeRange = null;
    this.sizeShow = null;
    this.color = null;
    this.colorShow = null;
    this.sheet = null;
    this.init();
    this.initEvent();
  }

  _createClass(Custom, [{
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      this.sizeRange.addEventListener('input', function (e) {
        var value = _this.sizeRange.value;
        _this.sizeShow.innerText = value + 'px';

        _this.sheet.removeRule(0);

        _this.sheet.insertRule(".logpresso-icon-item i {font-size: ".concat(value, "px; }"), 0);
      });
      this.color.addEventListener('keyup', function (e) {
        var color = _this.color.value;
        var size = _this.sizeRange.value;
        _this.colorShow.style.background = color;

        _this.sheet.removeRule(0);

        _this.sheet.insertRule(".logpresso-icon-item i {\n\t\t\t\t\tfont-size: ".concat(size, "px;\n\t\t\t\t\tcolor: ").concat(color, ";\n\t\t\t\t}"), 0);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.sizeRange = document.querySelector(SIZE_RANGE_ID);
      this.sizeShow = document.querySelector(SIZE_SHOW_CLASS);
      this.color = document.querySelector(COLOR_ID);
      this.colorShow = document.querySelector(COLOR_SHOW_CLASS);

      var _iterator = _createForOfIteratorHelper(document.styleSheets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sheet = _step.value;
          if (sheet.title === 'style') this.sheet = sheet;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Custom;
}();

exports.Custom = Custom;
},{}],"files.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconFiles = void 0;
var iconFiles = ["airplay.svg", "alert-circle.svg", "alert-octagon.svg", "alert-triangle.svg", "align-center.svg", "align-justify.svg", "align-left.svg", "align-right.svg", "analysis.svg", "anchor.svg", "app.svg", "arrow-down-left.svg", "arrow-down-right.svg", "arrow-down.svg", "arrow-left.svg", "arrow-right.svg", "arrow-up-left.svg", "arrow-up-right.svg", "arrow-up.svg", "at-sign.svg", "award.svg", "bar-chart-2.svg", "bar-chart.svg", "bell-off.svg", "bell.svg", "bluetooth.svg", "book.svg", "bookmark.svg", "box.svg", "briefcase.svg", "burger-menu.svg", "calendar-check.svg", "calendar-minus.svg", "calendar-plus.svg", "calendar-x.svg", "calendar.svg", "camera-off.svg", "camera.svg", "card-view.svg", "cast.svg", "check-circle.svg", "check-square.svg", "check.svg", "chevron-down.svg", "chevron-left.svg", "chevron-right.svg", "chevron-up.svg", "chevrons-down.svg", "chevrons-left.svg", "chevrons-right.svg", "chevrons-up.svg", "chrome.svg", "circle.svg", "clipboard.svg", "cloud-off.svg", "cloud.svg", "command.svg", "compass.svg", "copy.svg", "corner-down-left.svg", "corner-down-right.svg", "corner-left-down.svg", "corner-left-up.svg", "corner-right-down.svg", "corner-right-up.svg", "corner-up-left.svg", "corner-up-right.svg", "cpu.svg", "crosshair.svg", "cursor.svg", "database.svg", "decision.svg", "delete.svg", "disc.svg", "download-cloud.svg", "download.svg", "droplet.svg", "edit-2.svg", "edit-3.svg", "edit.svg", "export.svg", "external-link.svg", "eye-off.svg", "eye.svg", "fast-forward.svg", "file-minus.svg", "file-plus.svg", "file-text.svg", "file.svg", "film.svg", "filter.svg", "flag.svg", "folder.svg", "github.svg", "globe.svg", "grid-off.svg", "grid-on.svg", "grid.svg", "hash.svg", "heart.svg", "home.svg", "icon-03.svg", "icon-35.svg", "image.svg", "import.svg", "inbox.svg", "info-circle.svg", "input-user.svg", "layer-bottom.svg", "layer-center.svg", "layer-horizontal.svg", "layer-left.svg", "layer-middle.svg", "layer-right.svg", "layer-top.svg", "layer-vertical.svg", "layers.svg", "layout.svg", "life-buoy.svg", "link-2.svg", "link.svg", "list-ol.svg", "list-view.svg", "loader.svg", "lock.svg", "log-in.svg", "log-out.svg", "lookup.svg", "mail.svg", "map-pin.svg", "map.svg", "maximize-2.svg", "maximize.svg", "message-circle.svg", "message-square.svg", "mic-off.svg", "mic.svg", "minimize-2.svg", "minimize.svg", "minus-circle.svg", "minus-square.svg", "minus.svg", "monitor.svg", "moon.svg", "more-horizontal.svg", "more-vertical.svg", "move.svg", "music.svg", "navigation-2.svg", "navigation.svg", "octagon.svg", "package.svg", "pause-circle.svg", "pause.svg", "percent.svg", "pie-chart.svg", "play-circle.svg", "play.svg", "playbook-other.svg", "plus-circle.svg", "plus-square.svg", "plus.svg", "power.svg", "printer.svg", "quarterly.svg", "query.svg", "question-circle.svg", "radio.svg", "refresh-cw.svg", "refresh-time-ccw.svg", "refresh-time-cw.svg", "repeat.svg", "request-work-1.svg", "request-work-2.svg", "rewind.svg", "rotate-ccw.svg", "rotate-cw.svg", "rotate-time-ccw.svg", "rotate-time-cw.svg", "run-query.svg", "save.svg", "scissors.svg", "screen-mode.svg", "search.svg", "security.svg", "server.svg", "settings.svg", "share-2.svg", "shuffle.svg", "skip-back.svg", "skip-forward.svg", "slack.svg", "slash-circle.svg", "square.svg", "star.svg", "stop-circle.svg", "stopwatch.svg", "sun.svg", "tag.svg", "target.svg", "thumbs-down.svg", "thumbs-up.svg", "ticket.svg", "time.svg", "toggle-left.svg", "toggle-right.svg", "trash-2.svg", "trash.svg", "triangle.svg", "type.svg", "unlock.svg", "upload-cloud.svg", "upload.svg", "user-check.svg", "user-minus.svg", "user-plus.svg", "user-x.svg", "user.svg", "users.svg", "variable.svg", "volume-1.svg", "volume-2.svg", "volume-x.svg", "volume.svg", "vpn.svg", "watch.svg", "wifi.svg", "x-circle.svg", "x-square.svg", "x.svg", "zap.svg", "zoom-in.svg", "zoom-out.svg"];
exports.iconFiles = iconFiles;
},{}],"src/icon-manager.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconManager = void 0;

var _files = require("../files");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ICON_WRAPPER_CLASS = 'logpresso-icon-item';
var ICON_CLASS = 'lp-icon';
var SEARCH_ELEMENT = '.search-bar-input';
var COPY_TARGET = 'copy-target';

var IconManager = /*#__PURE__*/function () {
  function IconManager(targetElement) {
    _classCallCheck(this, IconManager);

    this.iconElements = [];
    this.searchBar = null;
    this.init(targetElement);
    this.initEvent();
  }

  _createClass(IconManager, [{
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      this.searchBar.addEventListener('keyup', function (e) {
        if (_this.searchBar.value !== '') {
          _this.iconElements.forEach(function (icon) {
            var idxOf = icon.innerText.indexOf(_this.searchBar.value);

            if (idxOf === -1) {
              icon.style.display = 'none';
            } else {
              icon.style.display = 'flex';
            }
          });
        } else {
          _this.iconElements.forEach(function (icon) {
            return icon.style.display = 'flex';
          });
        }
      });
      this.renderTarget.addEventListener('click', function (e) {
        var target = e.target;

        if (target.classList.contains(COPY_TARGET)) {
          var tempElem = document.createElement('textarea');
          tempElem.value = "<i class=\"lp-icon\">".concat(target.innerText, "</i>");
          document.body.appendChild(tempElem);
          tempElem.select();
          document.execCommand("copy");
          document.body.removeChild(tempElem);
        }
      });
    }
  }, {
    key: "init",
    value: function init(target) {
      this.searchBar = document.querySelector(SEARCH_ELEMENT);
      this.renderTarget = target;
      this.iconElements = _files.iconFiles.map(function (icon) {
        var div = document.createElement('div');
        var i = document.createElement('i');
        var span = document.createElement('span');
        div.className = ICON_WRAPPER_CLASS;
        i.className = ICON_CLASS;
        i.classList.add(COPY_TARGET);
        var iconName = icon.replace('.svg', '');
        i.innerHTML = iconName;
        span.innerText = iconName;
        span.className = COPY_TARGET;
        div.appendChild(i);
        div.appendChild(span);
        target.appendChild(div);
        return div;
      });
    }
  }]);

  return IconManager;
}();

exports.IconManager = IconManager;
},{"../files":"files.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var _custom = require("./src/custom");

var _iconManager = require("./src/icon-manager");

var TARGET_ELEMENT = '.logpresso-icon-viewer';
var SEARCH_ELEMENT = 'search-bar-input';

window.onload = function () {
  var target = document.body.querySelector(TARGET_ELEMENT);
  target.innerHTML = '';
  var iconManager = new _iconManager.IconManager(target);
  var custom = new _custom.Custom();
};
},{"./src/custom":"src/custom.ts","./src/icon-manager":"src/icon-manager.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53134" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/svg2font.77de5100.js.map