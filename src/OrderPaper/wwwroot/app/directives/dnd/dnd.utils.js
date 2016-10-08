System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Check and return true if an object is type of string
     */
    function isString(obj) {
        return typeof obj === "string";
    }
    exports_1("isString", isString);
    /**
     * Check and return true if an object not undefined or null
     */
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    exports_1("isPresent", isPresent);
    /**
     * Check and return true if an object is type of Function
     */
    function isFunction(obj) {
        return typeof obj === "function";
    }
    exports_1("isFunction", isFunction);
    /**
     * Create Image element with specified url string
     */
    function createImage(src) {
        var img = new HTMLImageElement();
        img.src = src;
        return img;
    }
    exports_1("createImage", createImage);
    /**
     * Call the function
     */
    function callFun(fun) {
        return fun();
    }
    exports_1("callFun", callFun);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=dnd.utils.js.map