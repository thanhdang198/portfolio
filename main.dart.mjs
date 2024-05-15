let buildArgsList;

// `modulePromise` is a promise to the `WebAssembly.module` object to be
//   instantiated.
// `importObjectPromise` is a promise to an object that contains any additional
//   imports needed by the module that aren't provided by the standard runtime.
//   The fields on this object will be merged into the importObject with which
//   the module will be instantiated.
// This function returns a promise to the instantiated module.
export const instantiate = async (modulePromise, importObjectPromise) => {
    let dartInstance;

    function stringFromDartString(string) {
        const totalLength = dartInstance.exports.$stringLength(string);
        let result = '';
        let index = 0;
        while (index < totalLength) {
          let chunkLength = Math.min(totalLength - index, 0xFFFF);
          const array = new Array(chunkLength);
          for (let i = 0; i < chunkLength; i++) {
              array[i] = dartInstance.exports.$stringRead(string, index++);
          }
          result += String.fromCharCode(...array);
        }
        return result;
    }

    function stringToDartString(string) {
        const length = string.length;
        let range = 0;
        for (let i = 0; i < length; i++) {
            range |= string.codePointAt(i);
        }
        if (range < 256) {
            const dartString = dartInstance.exports.$stringAllocate1(length);
            for (let i = 0; i < length; i++) {
                dartInstance.exports.$stringWrite1(dartString, i, string.codePointAt(i));
            }
            return dartString;
        } else {
            const dartString = dartInstance.exports.$stringAllocate2(length);
            for (let i = 0; i < length; i++) {
                dartInstance.exports.$stringWrite2(dartString, i, string.charCodeAt(i));
            }
            return dartString;
        }
    }

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
        const length = dartInstance.exports.$listLength(list);
        const array = new constructor(length);
        for (let i = 0; i < length; i++) {
            array[i] = dartInstance.exports.$listRead(list, i);
        }
        return array;
    }

    buildArgsList = function(list) {
        const dartList = dartInstance.exports.$makeStringList();
        for (let i = 0; i < list.length; i++) {
            dartInstance.exports.$listAdd(dartList, stringToDartString(list[i]));
        }
        return dartList;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
        wrapped.dartFunction = dartFunction;
        wrapped[jsWrappedDartFunctionSymbol] = true;
        return wrapped;
    }

    // Imports
    const dart2wasm = {

_1: (x0,x1,x2) => x0.set(x1,x2),
_2: (x0,x1,x2) => x0.set(x1,x2),
_6: f => finalizeWrapper(f,x0 => dartInstance.exports._6(f,x0)),
_7: x0 => new window.FinalizationRegistry(x0),
_8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
_9: (x0,x1) => x0.unregister(x1),
_10: (x0,x1,x2) => x0.slice(x1,x2),
_11: (x0,x1) => x0.decode(x1),
_12: (x0,x1) => x0.segment(x1),
_13: () => new TextDecoder(),
_14: x0 => x0.buffer,
_15: x0 => x0.wasmMemory,
_16: () => globalThis.window._flutter_skwasmInstance,
_17: x0 => x0.rasterStartMilliseconds,
_18: x0 => x0.rasterEndMilliseconds,
_19: x0 => x0.imageBitmaps,
_164: x0 => x0.focus(),
_165: x0 => x0.select(),
_166: (x0,x1) => x0.append(x1),
_167: x0 => x0.remove(),
_170: x0 => x0.unlock(),
_175: x0 => x0.getReader(),
_185: x0 => new MutationObserver(x0),
_204: (x0,x1,x2) => x0.addEventListener(x1,x2),
_205: (x0,x1,x2) => x0.removeEventListener(x1,x2),
_208: x0 => new ResizeObserver(x0),
_211: (x0,x1) => new Intl.Segmenter(x0,x1),
_212: x0 => x0.next(),
_213: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
_290: x0 => x0.close(),
_291: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
_292: x0 => new window.ImageDecoder(x0),
_293: x0 => x0.close(),
_294: x0 => ({frameIndex: x0}),
_295: (x0,x1) => x0.decode(x1),
_298: f => finalizeWrapper(f,x0 => dartInstance.exports._298(f,x0)),
_299: f => finalizeWrapper(f,x0 => dartInstance.exports._299(f,x0)),
_300: (x0,x1) => ({addView: x0,removeView: x1}),
_301: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._301(f,arguments.length,x0) }),
_302: f => finalizeWrapper(f,() => dartInstance.exports._302(f)),
_303: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
_304: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._304(f,arguments.length,x0) }),
_305: x0 => ({runApp: x0}),
_306: x0 => new Uint8Array(x0),
_308: x0 => x0.preventDefault(),
_309: x0 => x0.stopPropagation(),
_310: (x0,x1) => x0.addListener(x1),
_311: (x0,x1) => x0.removeListener(x1),
_312: (x0,x1) => x0.prepend(x1),
_313: x0 => x0.remove(),
_314: x0 => x0.disconnect(),
_315: (x0,x1) => x0.addListener(x1),
_316: (x0,x1) => x0.removeListener(x1),
_319: (x0,x1) => x0.append(x1),
_320: x0 => x0.remove(),
_321: x0 => x0.stopPropagation(),
_325: x0 => x0.preventDefault(),
_326: (x0,x1) => x0.append(x1),
_327: x0 => x0.remove(),
_332: (x0,x1) => x0.appendChild(x1),
_333: (x0,x1,x2) => x0.insertBefore(x1,x2),
_334: (x0,x1) => x0.removeChild(x1),
_335: (x0,x1) => x0.appendChild(x1),
_336: (x0,x1) => x0.transferFromImageBitmap(x1),
_337: (x0,x1) => x0.append(x1),
_338: (x0,x1) => x0.append(x1),
_339: (x0,x1) => x0.append(x1),
_340: x0 => x0.remove(),
_341: x0 => x0.focus(),
_342: x0 => x0.focus(),
_343: x0 => x0.remove(),
_344: x0 => x0.focus(),
_345: x0 => x0.remove(),
_346: (x0,x1) => x0.appendChild(x1),
_347: (x0,x1) => x0.append(x1),
_348: x0 => x0.focus(),
_349: (x0,x1) => x0.append(x1),
_350: x0 => x0.remove(),
_351: (x0,x1) => x0.append(x1),
_352: (x0,x1) => x0.append(x1),
_353: (x0,x1,x2) => x0.insertBefore(x1,x2),
_354: (x0,x1) => x0.append(x1),
_355: (x0,x1,x2) => x0.insertBefore(x1,x2),
_356: x0 => x0.remove(),
_357: x0 => x0.remove(),
_358: x0 => x0.remove(),
_359: (x0,x1) => x0.append(x1),
_360: x0 => x0.remove(),
_361: x0 => x0.remove(),
_362: x0 => x0.getBoundingClientRect(),
_363: x0 => x0.remove(),
_364: x0 => x0.blur(),
_366: x0 => x0.focus(),
_367: x0 => x0.focus(),
_368: x0 => x0.remove(),
_369: x0 => x0.focus(),
_370: x0 => x0.focus(),
_371: x0 => x0.blur(),
_372: x0 => x0.remove(),
_385: (x0,x1) => x0.append(x1),
_386: x0 => x0.remove(),
_387: (x0,x1) => x0.append(x1),
_388: (x0,x1,x2) => x0.insertBefore(x1,x2),
_389: (x0,x1) => x0.append(x1),
_390: x0 => x0.focus(),
_391: x0 => x0.focus(),
_392: x0 => x0.focus(),
_393: x0 => x0.focus(),
_394: x0 => x0.focus(),
_395: (x0,x1) => x0.append(x1),
_396: x0 => x0.focus(),
_397: x0 => x0.blur(),
_398: x0 => x0.remove(),
_400: x0 => x0.preventDefault(),
_401: x0 => x0.focus(),
_402: x0 => x0.preventDefault(),
_403: x0 => x0.preventDefault(),
_404: x0 => x0.preventDefault(),
_405: x0 => x0.focus(),
_406: x0 => x0.focus(),
_407: (x0,x1) => x0.append(x1),
_408: x0 => x0.focus(),
_409: x0 => x0.focus(),
_410: x0 => x0.focus(),
_411: x0 => x0.focus(),
_412: (x0,x1) => x0.observe(x1),
_413: x0 => x0.disconnect(),
_414: (x0,x1) => x0.appendChild(x1),
_415: (x0,x1) => x0.appendChild(x1),
_416: (x0,x1) => x0.appendChild(x1),
_417: (x0,x1) => x0.append(x1),
_418: (x0,x1) => x0.append(x1),
_419: x0 => x0.remove(),
_420: (x0,x1) => x0.append(x1),
_422: (x0,x1) => x0.appendChild(x1),
_423: (x0,x1) => x0.append(x1),
_424: x0 => x0.remove(),
_425: (x0,x1) => x0.append(x1),
_429: (x0,x1) => x0.appendChild(x1),
_430: x0 => x0.remove(),
_985: () => globalThis.window.flutterConfiguration,
_986: x0 => x0.assetBase,
_990: x0 => x0.debugShowSemanticsNodes,
_991: x0 => x0.hostElement,
_992: x0 => x0.multiViewEnabled,
_993: x0 => x0.nonce,
_995: x0 => x0.fontFallbackBaseUrl,
_996: x0 => x0.useColorEmoji,
_1000: x0 => x0.console,
_1001: x0 => x0.devicePixelRatio,
_1002: x0 => x0.document,
_1003: x0 => x0.history,
_1004: x0 => x0.innerHeight,
_1005: x0 => x0.innerWidth,
_1006: x0 => x0.location,
_1007: x0 => x0.navigator,
_1008: x0 => x0.visualViewport,
_1009: x0 => x0.performance,
_1010: (x0,x1) => x0.fetch(x1),
_1013: (x0,x1) => x0.dispatchEvent(x1),
_1014: (x0,x1) => x0.matchMedia(x1),
_1015: (x0,x1) => x0.getComputedStyle(x1),
_1017: x0 => x0.screen,
_1018: (x0,x1) => x0.requestAnimationFrame(x1),
_1019: f => finalizeWrapper(f,x0 => dartInstance.exports._1019(f,x0)),
_1024: (x0,x1) => x0.warn(x1),
_1027: () => globalThis.window,
_1028: () => globalThis.Intl,
_1029: () => globalThis.Symbol,
_1032: x0 => x0.clipboard,
_1033: x0 => x0.maxTouchPoints,
_1034: x0 => x0.vendor,
_1035: x0 => x0.language,
_1036: x0 => x0.platform,
_1037: x0 => x0.userAgent,
_1038: x0 => x0.languages,
_1039: x0 => x0.documentElement,
_1040: (x0,x1) => x0.querySelector(x1),
_1043: (x0,x1) => x0.createElement(x1),
_1045: (x0,x1) => x0.execCommand(x1),
_1048: (x0,x1) => x0.createTextNode(x1),
_1049: (x0,x1) => x0.createEvent(x1),
_1054: x0 => x0.head,
_1055: x0 => x0.body,
_1056: (x0,x1) => x0.title = x1,
_1059: x0 => x0.activeElement,
_1061: x0 => x0.visibilityState,
_1062: () => globalThis.document,
_1063: (x0,x1,x2) => x0.addEventListener(x1,x2),
_1064: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1066: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1067: (x0,x1,x2) => x0.removeEventListener(x1,x2),
_1070: f => finalizeWrapper(f,x0 => dartInstance.exports._1070(f,x0)),
_1071: x0 => x0.target,
_1073: x0 => x0.timeStamp,
_1074: x0 => x0.type,
_1075: x0 => x0.preventDefault(),
_1079: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
_1084: x0 => x0.firstChild,
_1090: x0 => x0.parentElement,
_1092: x0 => x0.parentNode,
_1095: (x0,x1) => x0.removeChild(x1),
_1096: (x0,x1) => x0.removeChild(x1),
_1098: (x0,x1) => x0.textContent = x1,
_1101: (x0,x1) => x0.contains(x1),
_1106: x0 => x0.firstElementChild,
_1108: x0 => x0.nextElementSibling,
_1109: x0 => x0.clientHeight,
_1110: x0 => x0.clientWidth,
_1111: x0 => x0.id,
_1112: (x0,x1) => x0.id = x1,
_1115: (x0,x1) => x0.spellcheck = x1,
_1116: x0 => x0.tagName,
_1117: x0 => x0.style,
_1118: (x0,x1) => x0.append(x1),
_1120: x0 => x0.getBoundingClientRect(),
_1123: (x0,x1) => x0.closest(x1),
_1126: (x0,x1) => x0.querySelectorAll(x1),
_1127: x0 => x0.remove(),
_1128: (x0,x1,x2) => x0.setAttribute(x1,x2),
_1129: (x0,x1) => x0.removeAttribute(x1),
_1130: (x0,x1) => x0.tabIndex = x1,
_1133: x0 => x0.scrollTop,
_1134: (x0,x1) => x0.scrollTop = x1,
_1135: x0 => x0.scrollLeft,
_1136: (x0,x1) => x0.scrollLeft = x1,
_1137: x0 => x0.classList,
_1138: (x0,x1) => x0.className = x1,
_1144: (x0,x1) => x0.getElementsByClassName(x1),
_1145: x0 => x0.click(),
_1147: (x0,x1) => x0.hasAttribute(x1),
_1149: (x0,x1) => x0.attachShadow(x1),
_1152: (x0,x1) => x0.getPropertyValue(x1),
_1154: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
_1156: (x0,x1) => x0.removeProperty(x1),
_1158: x0 => x0.offsetLeft,
_1159: x0 => x0.offsetTop,
_1160: x0 => x0.offsetParent,
_1162: (x0,x1) => x0.name = x1,
_1163: x0 => x0.content,
_1164: (x0,x1) => x0.content = x1,
_1177: (x0,x1) => x0.nonce = x1,
_1182: x0 => x0.now(),
_1184: (x0,x1) => x0.width = x1,
_1186: (x0,x1) => x0.height = x1,
_1189: (x0,x1) => x0.getContext(x1),
_1264: x0 => x0.status,
_1265: x0 => x0.headers,
_1266: x0 => x0.body,
_1267: x0 => x0.arrayBuffer(),
_1270: (x0,x1) => x0.get(x1),
_1272: x0 => x0.read(),
_1273: x0 => x0.value,
_1274: x0 => x0.done,
_1276: x0 => x0.name,
_1277: x0 => x0.x,
_1278: x0 => x0.y,
_1281: x0 => x0.top,
_1282: x0 => x0.right,
_1283: x0 => x0.bottom,
_1284: x0 => x0.left,
_1295: x0 => x0.height,
_1296: x0 => x0.width,
_1297: (x0,x1) => x0.value = x1,
_1300: (x0,x1) => x0.placeholder = x1,
_1301: (x0,x1) => x0.name = x1,
_1302: x0 => x0.selectionDirection,
_1303: x0 => x0.selectionStart,
_1304: x0 => x0.selectionEnd,
_1307: x0 => x0.value,
_1308: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
_1312: x0 => x0.readText(),
_1314: (x0,x1) => x0.writeText(x1),
_1315: x0 => x0.altKey,
_1316: x0 => x0.code,
_1317: x0 => x0.ctrlKey,
_1318: x0 => x0.key,
_1319: x0 => x0.keyCode,
_1320: x0 => x0.location,
_1321: x0 => x0.metaKey,
_1322: x0 => x0.repeat,
_1323: x0 => x0.shiftKey,
_1324: x0 => x0.isComposing,
_1325: (x0,x1) => x0.getModifierState(x1),
_1326: x0 => x0.state,
_1329: (x0,x1) => x0.go(x1),
_1330: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
_1331: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
_1332: x0 => x0.pathname,
_1333: x0 => x0.search,
_1334: x0 => x0.hash,
_1337: x0 => x0.state,
_1342: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1342(f,x0,x1)),
_1344: (x0,x1,x2) => x0.observe(x1,x2),
_1347: x0 => x0.attributeName,
_1348: x0 => x0.type,
_1349: x0 => x0.matches,
_1352: x0 => x0.matches,
_1353: x0 => x0.relatedTarget,
_1354: x0 => x0.clientX,
_1355: x0 => x0.clientY,
_1356: x0 => x0.offsetX,
_1357: x0 => x0.offsetY,
_1360: x0 => x0.button,
_1361: x0 => x0.buttons,
_1362: x0 => x0.ctrlKey,
_1363: (x0,x1) => x0.getModifierState(x1),
_1364: x0 => x0.pointerId,
_1365: x0 => x0.pointerType,
_1366: x0 => x0.pressure,
_1367: x0 => x0.tiltX,
_1368: x0 => x0.tiltY,
_1369: x0 => x0.getCoalescedEvents(),
_1370: x0 => x0.deltaX,
_1371: x0 => x0.deltaY,
_1372: x0 => x0.wheelDeltaX,
_1373: x0 => x0.wheelDeltaY,
_1374: x0 => x0.deltaMode,
_1379: x0 => x0.changedTouches,
_1381: x0 => x0.clientX,
_1382: x0 => x0.clientY,
_1383: x0 => x0.data,
_1384: (x0,x1) => x0.type = x1,
_1385: (x0,x1) => x0.max = x1,
_1386: (x0,x1) => x0.min = x1,
_1387: (x0,x1) => x0.value = x1,
_1388: x0 => x0.value,
_1389: x0 => x0.disabled,
_1390: (x0,x1) => x0.disabled = x1,
_1391: (x0,x1) => x0.placeholder = x1,
_1392: (x0,x1) => x0.name = x1,
_1393: (x0,x1) => x0.autocomplete = x1,
_1394: x0 => x0.selectionDirection,
_1395: x0 => x0.selectionStart,
_1396: x0 => x0.selectionEnd,
_1399: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
_1406: (x0,x1) => x0.add(x1),
_1409: (x0,x1) => x0.noValidate = x1,
_1410: (x0,x1) => x0.method = x1,
_1411: (x0,x1) => x0.action = x1,
_1439: x0 => x0.orientation,
_1440: x0 => x0.width,
_1441: x0 => x0.height,
_1442: (x0,x1) => x0.lock(x1),
_1459: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1459(f,x0,x1)),
_1469: x0 => x0.length,
_1471: (x0,x1) => x0.item(x1),
_1472: x0 => x0.length,
_1473: (x0,x1) => x0.item(x1),
_1474: x0 => x0.iterator,
_1475: x0 => x0.Segmenter,
_1476: x0 => x0.v8BreakIterator,
_1479: x0 => x0.done,
_1480: x0 => x0.value,
_1481: x0 => x0.index,
_1485: (x0,x1) => x0.adoptText(x1),
_1486: x0 => x0.first(),
_1488: x0 => x0.next(),
_1489: x0 => x0.current(),
_1501: x0 => x0.hostElement,
_1502: x0 => x0.viewConstraints,
_1504: x0 => x0.maxHeight,
_1505: x0 => x0.maxWidth,
_1506: x0 => x0.minHeight,
_1507: x0 => x0.minWidth,
_1508: x0 => x0.loader,
_1509: () => globalThis._flutter,
_1510: (x0,x1) => x0.didCreateEngineInitializer(x1),
_1511: (x0,x1,x2) => x0.call(x1,x2),
_1512: () => globalThis.Promise,
_1513: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1513(f,x0,x1)),
_1518: x0 => x0.length,
_1521: x0 => x0.tracks,
_1525: x0 => x0.image,
_1530: x0 => x0.codedWidth,
_1531: x0 => x0.codedHeight,
_1534: x0 => x0.duration,
_1538: x0 => x0.ready,
_1539: x0 => x0.selectedTrack,
_1540: x0 => x0.repetitionCount,
_1541: x0 => x0.frameCount,
_1586: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
_1587: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
_1588: f => finalizeWrapper(f,x0 => dartInstance.exports._1588(f,x0)),
_1589: (x0,x1,x2) => x0.addEventListener(x1,x2),
_1590: f => finalizeWrapper(f,x0 => dartInstance.exports._1590(f,x0)),
_1591: x0 => x0.send(),
_1592: () => new XMLHttpRequest(),
_1594: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
_1595: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
_1596: x0 => globalThis.firebase_core.getApp(x0),
_1597: () => globalThis.firebase_core.getApp(),
_1600: () => globalThis.firebase_core.SDK_VERSION,
_1607: x0 => x0.apiKey,
_1609: x0 => x0.authDomain,
_1611: x0 => x0.databaseURL,
_1613: x0 => x0.projectId,
_1615: x0 => x0.storageBucket,
_1617: x0 => x0.messagingSenderId,
_1619: x0 => x0.measurementId,
_1621: x0 => x0.appId,
_1623: x0 => x0.name,
_1624: x0 => x0.options,
_1629: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8,x9),
_1630: (x0,x1) => new firebase_firestore.GeoPoint(x0,x1),
_1632: x0 => globalThis.firebase_firestore.Bytes.fromUint8Array(x0),
_1635: x0 => globalThis.firebase_firestore.Timestamp.fromMillis(x0),
_1641: (x0,x1) => ({includeMetadataChanges: x0,source: x1}),
_1642: x0 => ({source: x0}),
_1644: x0 => ({serverTimestamps: x0}),
_1645: (x0,x1) => globalThis.firebase_firestore.getFirestore(x0,x1),
_1650: (x0,x1) => globalThis.firebase_firestore.collection(x0,x1),
_1656: (x0,x1) => globalThis.firebase_firestore.doc(x0,x1),
_1657: () => globalThis.firebase_firestore.documentId(),
_1661: x0 => globalThis.firebase_firestore.getDoc(x0),
_1662: x0 => globalThis.firebase_firestore.getDocFromCache(x0),
_1663: x0 => globalThis.firebase_firestore.getDocFromServer(x0),
_1667: x0 => globalThis.firebase_firestore.increment(x0),
_1672: (x0,x1,x2,x3) => globalThis.firebase_firestore.onSnapshot(x0,x1,x2,x3),
_1690: () => globalThis.firebase_firestore.updateDoc,
_1704: x0 => x0.path,
_1708: () => globalThis.firebase_firestore.GeoPoint,
_1709: x0 => x0.latitude,
_1710: x0 => x0.longitude,
_1712: () => globalThis.firebase_firestore.Bytes,
_1714: x0 => x0.toUint8Array(),
_1724: () => globalThis.firebase_firestore.DocumentReference,
_1728: x0 => x0.path,
_1739: x0 => x0.metadata,
_1740: x0 => x0.ref,
_1741: (x0,x1) => x0.data(x1),
_1761: () => globalThis.firebase_firestore.Timestamp,
_1762: x0 => x0.seconds,
_1763: x0 => x0.nanoseconds,
_1797: x0 => x0.hasPendingWrites,
_1799: x0 => x0.fromCache,
_1806: x0 => x0.source,
_1826: x0 => x0.call(),
_1832: f => finalizeWrapper(f,x0 => dartInstance.exports._1832(f,x0)),
_1833: f => finalizeWrapper(f,x0 => dartInstance.exports._1833(f,x0)),
_1834: (x0,x1,x2) => globalThis.firebase_firestore.onSnapshot(x0,x1,x2),
_1835: (x0,x1) => globalThis.firebase_firestore.setDoc(x0,x1),
_1839: x0 => globalThis.firebase_firestore.doc(x0),
_1844: () => globalThis.firebase_firestore.getFirestore(),
_1850: x0 => new firebase_firestore.FieldPath(x0),
_1851: (x0,x1) => new firebase_firestore.FieldPath(x0,x1),
_1852: (x0,x1,x2) => new firebase_firestore.FieldPath(x0,x1,x2),
_1853: (x0,x1,x2,x3) => new firebase_firestore.FieldPath(x0,x1,x2,x3),
_1854: (x0,x1,x2,x3,x4) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4),
_1855: (x0,x1,x2,x3,x4,x5) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5),
_1856: (x0,x1,x2,x3,x4,x5,x6) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6),
_1857: (x0,x1,x2,x3,x4,x5,x6,x7) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7),
_1858: (x0,x1,x2,x3,x4,x5,x6,x7,x8) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8),
_1859: f => finalizeWrapper(f,() => dartInstance.exports._1859(f)),
_1860: (x0,x1) => x0.createElement(x1),
_1861: (x0,x1) => x0.debug(x1),
_1862: f => finalizeWrapper(f,x0 => dartInstance.exports._1862(f,x0)),
_1863: f => finalizeWrapper(f,(x0,x1) => dartInstance.exports._1863(f,x0,x1)),
_1864: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
_1865: (x0,x1,x2) => x0.createPolicy(x1,x2),
_1866: (x0,x1) => x0.createScriptURL(x1),
_1867: (x0,x1,x2) => x0.createScript(x1,x2),
_1868: (x0,x1) => x0.appendChild(x1),
_1869: (x0,x1) => x0.appendChild(x1),
_1870: f => finalizeWrapper(f,x0 => dartInstance.exports._1870(f,x0)),
_1871: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
_1880: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
_1883: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
_1905: (x0,x1) => x0.getItem(x1),
_1907: (x0,x1,x2) => x0.setItem(x1,x2),
_1908: (x0,x1) => x0.matchMedia(x1),
_1919: x0 => new Array(x0),
_1922: (o, c) => o instanceof c,
_1926: f => finalizeWrapper(f,x0 => dartInstance.exports._1926(f,x0)),
_1927: f => finalizeWrapper(f,x0 => dartInstance.exports._1927(f,x0)),
_1953: (decoder, codeUnits) => decoder.decode(codeUnits),
_1954: () => new TextDecoder("utf-8", {fatal: true}),
_1955: () => new TextDecoder("utf-8", {fatal: false}),
_1956: v => stringToDartString(v.toString()),
_1957: (d, digits) => stringToDartString(d.toFixed(digits)),
_1961: o => new WeakRef(o),
_1962: r => r.deref(),
_1967: Date.now,
_1969: s => new Date(s * 1000).getTimezoneOffset() * 60 ,
_1970: s => {
      const jsSource = stringFromDartString(s);
      if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(jsSource)) {
        return NaN;
      }
      return parseFloat(jsSource);
    },
_1971: () => {
          let stackString = new Error().stack.toString();
          let frames = stackString.split('\n');
          let drop = 2;
          if (frames[0] === 'Error') {
              drop += 1;
          }
          return frames.slice(drop).join('\n');
        },
_1972: () => typeof dartUseDateNowForTicks !== "undefined",
_1973: () => 1000 * performance.now(),
_1974: () => Date.now(),
_1975: () => {
      // On browsers return `globalThis.location.href`
      if (globalThis.location != null) {
        return stringToDartString(globalThis.location.href);
      }
      return null;
    },
_1977: () => new WeakMap(),
_1978: (map, o) => map.get(o),
_1979: (map, o, v) => map.set(o, v),
_1980: s => stringToDartString(JSON.stringify(stringFromDartString(s))),
_1981: s => printToConsole(stringFromDartString(s)),
_1990: (o, t) => o instanceof t,
_1992: f => finalizeWrapper(f,x0 => dartInstance.exports._1992(f,x0)),
_1993: f => finalizeWrapper(f,x0 => dartInstance.exports._1993(f,x0)),
_1994: o => Object.keys(o),
_1995: (ms, c) =>
              setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
_1996: (handle) => clearTimeout(handle),
_1997: (ms, c) =>
          setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
_1998: (handle) => clearInterval(handle),
_1999: (c) =>
              queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
_2000: () => Date.now(),
_2001: () => new XMLHttpRequest(),
_2002: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
_2003: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
_2004: (x0,x1) => x0.send(x1),
_2006: x0 => x0.getAllResponseHeaders(),
_2014: f => finalizeWrapper(f,x0 => dartInstance.exports._2014(f,x0)),
_2032: (x0,x1) => x0.key(x1),
_2033: x0 => x0.trustedTypes,
_2035: (x0,x1) => x0.text = x1,
_2037: (a, i) => a.push(i),
_2041: a => a.pop(),
_2042: (a, i) => a.splice(i, 1),
_2044: (a, s) => a.join(s),
_2045: (a, s, e) => a.slice(s, e),
_2048: a => a.length,
_2050: (a, i) => a[i],
_2051: (a, i, v) => a[i] = v,
_2053: a => a.join(''),
_2056: (s, t) => s.split(t),
_2057: s => s.toLowerCase(),
_2058: s => s.toUpperCase(),
_2059: s => s.trim(),
_2060: s => s.trimLeft(),
_2061: s => s.trimRight(),
_2063: (s, p, i) => s.indexOf(p, i),
_2064: (s, p, i) => s.lastIndexOf(p, i),
_2065: (o, offsetInBytes, lengthInBytes) => {
      var dst = new ArrayBuffer(lengthInBytes);
      new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
      return new DataView(dst);
    },
_2066: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
_2067: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
_2068: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
_2069: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
_2070: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
_2071: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
_2072: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
_2074: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
_2075: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
_2076: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
_2077: Object.is,
_2078: (t, s) => t.set(s),
_2080: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
_2082: o => o.buffer,
_2083: o => o.byteOffset,
_2084: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
_2085: (b, o) => new DataView(b, o),
_2086: (b, o, l) => new DataView(b, o, l),
_2087: Function.prototype.call.bind(DataView.prototype.getUint8),
_2088: Function.prototype.call.bind(DataView.prototype.setUint8),
_2089: Function.prototype.call.bind(DataView.prototype.getInt8),
_2090: Function.prototype.call.bind(DataView.prototype.setInt8),
_2091: Function.prototype.call.bind(DataView.prototype.getUint16),
_2092: Function.prototype.call.bind(DataView.prototype.setUint16),
_2093: Function.prototype.call.bind(DataView.prototype.getInt16),
_2094: Function.prototype.call.bind(DataView.prototype.setInt16),
_2095: Function.prototype.call.bind(DataView.prototype.getUint32),
_2096: Function.prototype.call.bind(DataView.prototype.setUint32),
_2097: Function.prototype.call.bind(DataView.prototype.getInt32),
_2098: Function.prototype.call.bind(DataView.prototype.setInt32),
_2101: Function.prototype.call.bind(DataView.prototype.getBigInt64),
_2102: Function.prototype.call.bind(DataView.prototype.setBigInt64),
_2103: Function.prototype.call.bind(DataView.prototype.getFloat32),
_2104: Function.prototype.call.bind(DataView.prototype.setFloat32),
_2105: Function.prototype.call.bind(DataView.prototype.getFloat64),
_2106: Function.prototype.call.bind(DataView.prototype.setFloat64),
_2112: s => stringToDartString(stringFromDartString(s).toUpperCase()),
_2113: s => stringToDartString(stringFromDartString(s).toLowerCase()),
_2115: (s, m) => {
          try {
            return new RegExp(s, m);
          } catch (e) {
            return String(e);
          }
        },
_2116: (x0,x1) => x0.exec(x1),
_2117: (x0,x1) => x0.test(x1),
_2118: (x0,x1) => x0.exec(x1),
_2119: (x0,x1) => x0.exec(x1),
_2120: x0 => x0.pop(),
_2124: (x0,x1,x2) => x0[x1] = x2,
_2126: o => o === undefined,
_2127: o => typeof o === 'boolean',
_2128: o => typeof o === 'number',
_2130: o => typeof o === 'string',
_2133: o => o instanceof Int8Array,
_2134: o => o instanceof Uint8Array,
_2135: o => o instanceof Uint8ClampedArray,
_2136: o => o instanceof Int16Array,
_2137: o => o instanceof Uint16Array,
_2138: o => o instanceof Int32Array,
_2139: o => o instanceof Uint32Array,
_2140: o => o instanceof Float32Array,
_2141: o => o instanceof Float64Array,
_2142: o => o instanceof ArrayBuffer,
_2143: o => o instanceof DataView,
_2144: o => o instanceof Array,
_2145: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
_2147: o => {
            const proto = Object.getPrototypeOf(o);
            return proto === Object.prototype || proto === null;
          },
_2148: o => o instanceof RegExp,
_2149: (l, r) => l === r,
_2150: o => o,
_2151: o => o,
_2152: o => o,
_2153: b => !!b,
_2154: o => o.length,
_2157: (o, i) => o[i],
_2158: f => f.dartFunction,
_2159: l => arrayFromDartList(Int8Array, l),
_2160: l => arrayFromDartList(Uint8Array, l),
_2161: l => arrayFromDartList(Uint8ClampedArray, l),
_2162: l => arrayFromDartList(Int16Array, l),
_2163: l => arrayFromDartList(Uint16Array, l),
_2164: l => arrayFromDartList(Int32Array, l),
_2165: l => arrayFromDartList(Uint32Array, l),
_2166: l => arrayFromDartList(Float32Array, l),
_2167: l => arrayFromDartList(Float64Array, l),
_2168: (data, length) => {
          const view = new DataView(new ArrayBuffer(length));
          for (let i = 0; i < length; i++) {
              view.setUint8(i, dartInstance.exports.$byteDataGetUint8(data, i));
          }
          return view;
        },
_2169: l => arrayFromDartList(Array, l),
_2170: stringFromDartString,
_2171: stringToDartString,
_2172: () => ({}),
_2173: () => [],
_2174: l => new Array(l),
_2175: () => globalThis,
_2176: (constructor, args) => {
      const factoryFunction = constructor.bind.apply(
          constructor, [null, ...args]);
      return new factoryFunction();
    },
_2177: (o, p) => p in o,
_2178: (o, p) => o[p],
_2179: (o, p, v) => o[p] = v,
_2180: (o, m, a) => o[m].apply(o, a),
_2182: o => String(o),
_2183: (p, s, f) => p.then(s, f),
_2184: s => {
      let jsString = stringFromDartString(s);
      if (/[[\]{}()*+?.\\^$|]/.test(jsString)) {
          jsString = jsString.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
      }
      return stringToDartString(jsString);
    },
_2187: x0 => x0.index,
_2189: x0 => x0.length,
_2191: (x0,x1) => x0[x1],
_2195: x0 => x0.flags,
_2196: x0 => x0.multiline,
_2197: x0 => x0.ignoreCase,
_2198: x0 => x0.unicode,
_2199: x0 => x0.dotAll,
_2200: (x0,x1) => x0.lastIndex = x1,
_2202: (o, p) => o[p],
_2203: (o, p, v) => o[p] = v,
_2204: (o, p) => delete o[p],
_2225: () => globalThis.window,
_2246: x0 => x0.matches,
_2250: x0 => x0.platform,
_2255: x0 => x0.navigator,
_2262: x0 => x0.status,
_2263: (x0,x1) => x0.responseType = x1,
_2265: x0 => x0.response,
_2299: (x0,x1) => x0.withCredentials = x1,
_2302: x0 => x0.responseURL,
_2303: x0 => x0.status,
_2304: x0 => x0.statusText,
_2305: (x0,x1) => x0.responseType = x1,
_2307: x0 => x0.response,
_3645: (x0,x1) => x0.type = x1,
_3653: (x0,x1) => x0.crossOrigin = x1,
_3655: (x0,x1) => x0.text = x1,
_4064: () => globalThis.window,
_4144: x0 => x0.navigator,
_4400: x0 => x0.trustedTypes,
_4402: x0 => x0.localStorage,
_4625: x0 => x0.userAgent,
_4843: x0 => x0.length,
_9039: () => globalThis.document,
_9130: x0 => x0.head,
_14883: () => globalThis.console,
_14907: () => globalThis.window.flutterCanvasKit,
_14908: x0 => x0.name,
_14909: x0 => x0.message,
_14910: x0 => x0.code
    };

    const baseImports = {
        dart2wasm: dart2wasm,


        Math: Math,
        Date: Date,
        Object: Object,
        Array: Array,
        Reflect: Reflect,
    };

    const jsStringPolyfill = {
        "charCodeAt": (s, i) => s.charCodeAt(i),
        "compare": (s1, s2) => {
            if (s1 < s2) return -1;
            if (s1 > s2) return 1;
            return 0;
        },
        "concat": (s1, s2) => s1 + s2,
        "equals": (s1, s2) => s1 === s2,
        "fromCharCode": (i) => String.fromCharCode(i),
        "length": (s) => s.length,
        "substring": (s, a, b) => s.substring(a, b),
    };

    dartInstance = await WebAssembly.instantiate(await modulePromise, {
        ...baseImports,
        ...(await importObjectPromise),
        "wasm:js-string": jsStringPolyfill,
    });

    return dartInstance;
}

// Call the main function for the instantiated module
// `moduleInstance` is the instantiated dart2wasm module
// `args` are any arguments that should be passed into the main function.
export const invoke = (moduleInstance, ...args) => {
    const dartMain = moduleInstance.exports.$getMain();
    const dartArgs = buildArgsList(args);
    moduleInstance.exports.$invokeMain(dartMain, dartArgs);
}

