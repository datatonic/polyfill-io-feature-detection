// Testing Configuration Template 
// Source: https://polyfill.io/v2/docs/features/#feature-list
// TODO: Add support to iterators

exports.configs = function () {
    window = {};
    window.Array = {};
    window.Array.from = function () { };
    window.Array.isArray = function () { };
    window.Array.of = function () { };
    //window.Array.prototype.@@iterator = function() {};
    window.Array.prototype = {};
    window.Array.prototype.contains = function () { };
    window.Array.prototype.entries = function () { };
    window.Array.prototype.every = function () { };
    window.Array.prototype.fill = function () { };
    window.Array.prototype.filter = function () { };
    window.Array.prototype.find = function () { };
    window.Array.prototype.findIndex = function () { };
    window.Array.prototype.forEach = function () { };
    window.Array.prototype.includes = function () { };
    window.Array.prototype.indexOf = function () { };
    window.Array.prototype.keys = function () { };
    window.Array.prototype.lastIndexOf = function () { };
    window.Array.prototype.map = function () { };
    window.Array.prototype.reduce = function () { };
    window.Array.prototype.reduceRight = function () { };
    window.Array.prototype.some = function () { };
    window.Array.prototype.values = function () { };
    window.AudioContext = function () { };
    window.CustomEvent = function () { };
    window.DOMTokenList = function () { };
    //window.DOMTokenList.prototype.@@iterator = function() {};
    window.Date = {};
    window.Date.now = function () { };
    window.Date.prototype = {};
    window.Date.prototype.toISOString = function () { };
    window.Document = function () { };
    window.Element = function () { };
    window.Element.prototype.after = function () { };
    window.Element.prototype.append = function () { };
    window.Element.prototype.before = function () { };
    window.Element.prototype.classList = function () { };
    window.Element.prototype.cloneNode = function () { };
    window.Element.prototype.closest = function () { };
    window.Element.prototype.dataset = function () { };
    window.Element.prototype.matches = function () { };
    window.Element.prototype.placeholder = function () { };
    window.Element.prototype.prepend = function () { };
    window.Element.prototype.remove = function () { };
    window.Element.prototype.replaceWith = function () { };
    window.Event = function () { };
    window.Event.focusin = function () { };
    window.Event.hashchange = function () { };
    window.Function = {};
    window.Function.name = function () { };
    window.Function.prototype = {};
    window.Function.prototype.bind = function () { };
    window.HTMLCanvasElement = {};
    window.HTMLCanvasElement.protoype = {};
    window.HTMLCanvasElement.protoype.toBlob = function () { };
    window.HTMLDocument = function () { };
    window.HTMLPictureElement = function () { };
    window.IntersectionObserver = function () { };
    window.Intl = function () { };
    window.JSON = function () { };
    window.Map = function () { };
    window.Math = {};
    window.Math.acosh = function () { };
    window.Math.asinh = function () { };
    window.Math.atanh = function () { };
    window.Math.cbrt = function () { };
    window.Math.clz32 = function () { };
    window.Math.cosh = function () { };
    window.Math.expm1 = function () { };
    window.Math.hypot = function () { };
    window.Math.imul = function () { };
    window.Math.log10 = function () { };
    window.Math.log1p = function () { };
    window.Math.log2 = function () { };
    window.Math.sign = function () { };
    window.Math.sinh = function () { };
    window.Math.tanh = function () { };
    window.Math.trunc = function () { };
    window.Node = {};
    window.Node.prototype = {};
    window.Node.prototype.contains = function () { };
    //window.NodeList.prototype.@@iterator = function() {};
    window.Number = {};
    window.Number.MAX_SAFE_INTEGER = function () { };
    window.Number.MIN_SAFE_INTEGER = function () { };
    window.Number.isFinite = function () { };
    window.Number.isInteger = function () { };
    window.Number.isNaN = function () { };
    window.Object = {};
    window.Object.assign = function () { };
    window.Object.create = function () { };
    window.Object.defineProperties = function () { };
    window.Object.defineProperty = function () { };
    window.Object.getOwnPropertyDescriptor = function () { };
    window.Object.getOwnPropertyNames = function () { };
    window.Object.getPrototypeOf = function () { };
    window.Object.is = function () { };
    window.Object.keys = function () { };
    window.Object.setPrototypeOf = function () { };
    window.Promise = function () { };
    window.Set = function () { };
    window.String = {};
    window.String.prototype = {};
    window.String.prototype.contains = function () { };
    window.String.prototype.endsWith = function () { };
    window.String.prototype.includes = function () { };
    window.String.prototype.repeat = function () { };
    window.String.prototype.startsWith = function () { };
    window.String.prototype.trim = function () { };
    window.Symbol = function () { };
    window.Symbol.hasInstance = function () { };
    window.Symbol.isConcatSpreadable = function () { };
    window.Symbol.iterator = function () { };
    window.Symbol.match = function () { };
    window.Symbol.replace = function () { };
    window.Symbol.search = function () { };
    window.Symbol.species = function () { };
    window.Symbol.split = function () { };
    window.Symbol.toPrimitive = function () { };
    window.Symbol.toStringTag = function () { };
    window.Symbol.unscopables = function () { };
    window.URL = function () { };
    window.UserTiming = function () { };
    window.WeakMap = function () { };
    window.WeakSet = function () { };
    window.XMLHttpRequest = function () { };
    window.atob = function () { };
    window.console = function () { };
    window.console.assert = function () { };
    window.console.clear = function () { };
    window.console.count = function () { };
    window.console.debug = function () { };
    window.console.dir = function () { };
    window.console.dirxml = function () { };
    window.console.error = function () { };
    window.console.exception = function () { };
    window.console.group = function () { };
    window.console.groupCollapsed = function () { };
    window.console.groupEnd = function () { };
    window.console.info = function () { };
    window.console.log = function () { };
    window.console.markTimeline = function () { };
    window.console.table = function () { };
    window.console.time = function () { };
    window.console.timeEnd = function () { };
    window.console.timeStamp = function () { };
    window.console.timeline = function () { };
    window.console.timelineEnd = function () { };
    window.console.trace = function () { };
    window.console.warn = function () { };
    window.devicePixelRatio = function () { };
    window.document = {};
    window.document.currentScript = function () { };
    window.document.getElementsByClassName = function () { };
    window.document.head = function () { };
    window.document.querySelector = function () { };
    window.document.visibilityState = function () { };
    window.fetch = function () { };
    window.getComputedStyle = function () { };
    window.localStorage = function () { };
    window.location = {};
    window.location.origin = function () { };
    window.matchMedia = function () { };
    window.navigator = {};
    window.navigator.geolocation = function () { };
    window.navigator.sendBeacon = function () { };
    window.performance = {};
    window.performance.now = function () { };
    window.requestAnimationFrame = function () { };
    window.screen = {};
    window.screen.orientation = function () { };
    window.setImmediate = function () { };
    //window.~html5-elements = function() {};
    //window.~viewport = function() {};

    return window;
}