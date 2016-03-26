!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].e;
        var module = installedModules[moduleId] = {
            e: {},
            i: moduleId,
            l: !1
        };
        return modules[moduleId].call(module.e, module, module.e, __webpack_require__), 
        module.l = !0, module.e;
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
}([ function(module, exports, __webpack_require__) {
    function isObject(value) {
        var type = typeof value;
        return !!value && ("object" == type || "function" == type);
    }
    exports.a = isObject;
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isObject__ = __webpack_require__(0);
    console.log(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isObject__.a.bind()(123));
} ]);
//# sourceMappingURL=path-to-file-uglified.js.map