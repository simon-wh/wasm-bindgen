(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: start, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_log_e851f2d904d456d5, __wbg_warn_43719b0a5c70fd1e, __wbindgen_cb_forget, __wbg_data_082454890c89a421, __wbg_label_6d2ad5a93e151ffa, __wbg_setonmessage_6c0599c11e050958, __wbg_send_9b57a38a09b1c3e5, __wbg_candidate_ffca4c5e832b9691, __wbg_candidate_a0b06f0ac95b49c2, __wbg_channel_c525d8645cdfa045, __wbg_signalingState_37eddf11f6fe61b7, __wbg_setonicecandidate_6e30c5397c6035f2, __wbg_setondatachannel_c311fc6589519cf0, __wbg_new_69ed0720617373f8, __wbg_addIceCandidate_6c7fb4b47ad2f16a, __wbg_createAnswer_fa1a430129e6a162, __wbg_createDataChannel_844ec7b779ef2457, __wbg_createOffer_cdd386cccabd0313, __wbg_setLocalDescription_273bd14b37f4b56a, __wbg_setRemoteDescription_97f49d8bbb29cadf, __wbindgen_cb_drop, __wbindgen_object_drop_ref, __wbg_new_17a08b876c4dedc9, __wbg_resolve_57cbe6ab0b3b60a7, __wbg_then_45c887a50a229274, __wbg_then_9d18941da21f7104, __wbg_get_38f68ddea9e54820, __wbg_set_ede434d91072bd5f, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper147, __wbindgen_closure_wrapper145, __wbindgen_closure_wrapper699, __wbindgen_closure_wrapper149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"start\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_e851f2d904d456d5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_e851f2d904d456d5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_warn_43719b0a5c70fd1e\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_warn_43719b0a5c70fd1e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_forget\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_data_082454890c89a421\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_data_082454890c89a421\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_label_6d2ad5a93e151ffa\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_label_6d2ad5a93e151ffa\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonmessage_6c0599c11e050958\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setonmessage_6c0599c11e050958\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_send_9b57a38a09b1c3e5\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_send_9b57a38a09b1c3e5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_ffca4c5e832b9691\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_candidate_ffca4c5e832b9691\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_a0b06f0ac95b49c2\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_candidate_a0b06f0ac95b49c2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_channel_c525d8645cdfa045\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_channel_c525d8645cdfa045\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_signalingState_37eddf11f6fe61b7\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_signalingState_37eddf11f6fe61b7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonicecandidate_6e30c5397c6035f2\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setonicecandidate_6e30c5397c6035f2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setondatachannel_c311fc6589519cf0\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setondatachannel_c311fc6589519cf0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_69ed0720617373f8\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_69ed0720617373f8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_addIceCandidate_6c7fb4b47ad2f16a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_addIceCandidate_6c7fb4b47ad2f16a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createAnswer_fa1a430129e6a162\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createAnswer_fa1a430129e6a162\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createDataChannel_844ec7b779ef2457\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createDataChannel_844ec7b779ef2457\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createOffer_cdd386cccabd0313\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_createOffer_cdd386cccabd0313\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setLocalDescription_273bd14b37f4b56a\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setLocalDescription_273bd14b37f4b56a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setRemoteDescription_97f49d8bbb29cadf\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_setRemoteDescription_97f49d8bbb29cadf\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_17a08b876c4dedc9\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_17a08b876c4dedc9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_57cbe6ab0b3b60a7\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_resolve_57cbe6ab0b3b60a7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_45c887a50a229274\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_45c887a50a229274\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_9d18941da21f7104\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_9d18941da21f7104\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_38f68ddea9e54820\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_get_38f68ddea9e54820\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_ede434d91072bd5f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_ede434d91072bd5f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper147\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper147\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper145\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper145\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper699\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper699\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper149\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper149\"]; });\n\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: start, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_log_e851f2d904d456d5, __wbg_warn_43719b0a5c70fd1e, __wbindgen_cb_forget, __wbg_data_082454890c89a421, __wbg_label_6d2ad5a93e151ffa, __wbg_setonmessage_6c0599c11e050958, __wbg_send_9b57a38a09b1c3e5, __wbg_candidate_ffca4c5e832b9691, __wbg_candidate_a0b06f0ac95b49c2, __wbg_channel_c525d8645cdfa045, __wbg_signalingState_37eddf11f6fe61b7, __wbg_setonicecandidate_6e30c5397c6035f2, __wbg_setondatachannel_c311fc6589519cf0, __wbg_new_69ed0720617373f8, __wbg_addIceCandidate_6c7fb4b47ad2f16a, __wbg_createAnswer_fa1a430129e6a162, __wbg_createDataChannel_844ec7b779ef2457, __wbg_createOffer_cdd386cccabd0313, __wbg_setLocalDescription_273bd14b37f4b56a, __wbg_setRemoteDescription_97f49d8bbb29cadf, __wbindgen_cb_drop, __wbindgen_object_drop_ref, __wbg_new_17a08b876c4dedc9, __wbg_resolve_57cbe6ab0b3b60a7, __wbg_then_45c887a50a229274, __wbg_then_9d18941da21f7104, __wbg_get_38f68ddea9e54820, __wbg_set_ede434d91072bd5f, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper147, __wbindgen_closure_wrapper145, __wbindgen_closure_wrapper699, __wbindgen_closure_wrapper149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_e851f2d904d456d5\", function() { return __wbg_log_e851f2d904d456d5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_warn_43719b0a5c70fd1e\", function() { return __wbg_warn_43719b0a5c70fd1e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_forget\", function() { return __wbindgen_cb_forget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_data_082454890c89a421\", function() { return __wbg_data_082454890c89a421; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_label_6d2ad5a93e151ffa\", function() { return __wbg_label_6d2ad5a93e151ffa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonmessage_6c0599c11e050958\", function() { return __wbg_setonmessage_6c0599c11e050958; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_send_9b57a38a09b1c3e5\", function() { return __wbg_send_9b57a38a09b1c3e5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_ffca4c5e832b9691\", function() { return __wbg_candidate_ffca4c5e832b9691; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_candidate_a0b06f0ac95b49c2\", function() { return __wbg_candidate_a0b06f0ac95b49c2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_channel_c525d8645cdfa045\", function() { return __wbg_channel_c525d8645cdfa045; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_signalingState_37eddf11f6fe61b7\", function() { return __wbg_signalingState_37eddf11f6fe61b7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setonicecandidate_6e30c5397c6035f2\", function() { return __wbg_setonicecandidate_6e30c5397c6035f2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setondatachannel_c311fc6589519cf0\", function() { return __wbg_setondatachannel_c311fc6589519cf0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_69ed0720617373f8\", function() { return __wbg_new_69ed0720617373f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_addIceCandidate_6c7fb4b47ad2f16a\", function() { return __wbg_addIceCandidate_6c7fb4b47ad2f16a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createAnswer_fa1a430129e6a162\", function() { return __wbg_createAnswer_fa1a430129e6a162; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createDataChannel_844ec7b779ef2457\", function() { return __wbg_createDataChannel_844ec7b779ef2457; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createOffer_cdd386cccabd0313\", function() { return __wbg_createOffer_cdd386cccabd0313; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setLocalDescription_273bd14b37f4b56a\", function() { return __wbg_setLocalDescription_273bd14b37f4b56a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setRemoteDescription_97f49d8bbb29cadf\", function() { return __wbg_setRemoteDescription_97f49d8bbb29cadf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_17a08b876c4dedc9\", function() { return __wbg_new_17a08b876c4dedc9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_57cbe6ab0b3b60a7\", function() { return __wbg_resolve_57cbe6ab0b3b60a7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_45c887a50a229274\", function() { return __wbg_then_45c887a50a229274; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_9d18941da21f7104\", function() { return __wbg_then_9d18941da21f7104; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_38f68ddea9e54820\", function() { return __wbg_get_38f68ddea9e54820; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_ede434d91072bd5f\", function() { return __wbg_set_ede434d91072bd5f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper147\", function() { return __wbindgen_closure_wrapper147; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper145\", function() { return __wbindgen_closure_wrapper145; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper699\", function() { return __wbindgen_closure_wrapper699; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper149\", function() { return __wbindgen_closure_wrapper149; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1 };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(dtor)(a, state.b);\n            else state.a = a;\n        }\n    };\n    real.original = state;\n    return real;\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_adapter_20(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdb0e6f3d12acbfe0\"](arg0, arg1, addHeapObject(arg2));\n}\n\nfunction __wbg_adapter_23(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6781fac3a7c8ce61\"](arg0, arg1, addHeapObject(arg2));\n}\n\nfunction __wbg_adapter_26(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hca78871980b7352c\"](arg0, arg1, addHeapObject(arg2));\n}\n\nfunction __wbg_adapter_29(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3f59c18488e5bda3\"](arg0, arg1, addHeapObject(arg2));\n}\n\n/**\n*/\nfunction start() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_log_e851f2d904d456d5 = logError(function(arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n});\n\nconst __wbg_warn_43719b0a5c70fd1e = logError(function(arg0, arg1) {\n    console.warn(getStringFromWasm0(arg0, arg1));\n});\n\nconst __wbindgen_cb_forget = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_data_082454890c89a421 = logError(function(arg0) {\n    var ret = getObject(arg0).data;\n    return addHeapObject(ret);\n});\n\nconst __wbg_label_6d2ad5a93e151ffa = logError(function(arg0, arg1) {\n    var ret = getObject(arg1).label;\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_setonmessage_6c0599c11e050958 = logError(function(arg0, arg1) {\n    getObject(arg0).onmessage = getObject(arg1);\n});\n\nconst __wbg_send_9b57a38a09b1c3e5 = handleError(function(arg0, arg1, arg2) {\n    getObject(arg0).send(getStringFromWasm0(arg1, arg2));\n});\n\nconst __wbg_candidate_ffca4c5e832b9691 = logError(function(arg0) {\n    var ret = getObject(arg0).candidate;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_candidate_a0b06f0ac95b49c2 = logError(function(arg0, arg1) {\n    var ret = getObject(arg1).candidate;\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_channel_c525d8645cdfa045 = logError(function(arg0) {\n    var ret = getObject(arg0).channel;\n    return addHeapObject(ret);\n});\n\nconst __wbg_signalingState_37eddf11f6fe61b7 = logError(function(arg0) {\n    var ret = getObject(arg0).signalingState;\n    return addHeapObject(ret);\n});\n\nconst __wbg_setonicecandidate_6e30c5397c6035f2 = logError(function(arg0, arg1) {\n    getObject(arg0).onicecandidate = getObject(arg1);\n});\n\nconst __wbg_setondatachannel_c311fc6589519cf0 = logError(function(arg0, arg1) {\n    getObject(arg0).ondatachannel = getObject(arg1);\n});\n\nconst __wbg_new_69ed0720617373f8 = handleError(function() {\n    var ret = new RTCPeerConnection();\n    return addHeapObject(ret);\n});\n\nconst __wbg_addIceCandidate_6c7fb4b47ad2f16a = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).addIceCandidate(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_createAnswer_fa1a430129e6a162 = logError(function(arg0) {\n    var ret = getObject(arg0).createAnswer();\n    return addHeapObject(ret);\n});\n\nconst __wbg_createDataChannel_844ec7b779ef2457 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).createDataChannel(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_createOffer_cdd386cccabd0313 = logError(function(arg0) {\n    var ret = getObject(arg0).createOffer();\n    return addHeapObject(ret);\n});\n\nconst __wbg_setLocalDescription_273bd14b37f4b56a = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).setLocalDescription(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_setRemoteDescription_97f49d8bbb29cadf = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).setRemoteDescription(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_new_17a08b876c4dedc9 = logError(function() {\n    var ret = new Object();\n    return addHeapObject(ret);\n});\n\nconst __wbg_resolve_57cbe6ab0b3b60a7 = logError(function(arg0) {\n    var ret = Promise.resolve(getObject(arg0));\n    return addHeapObject(ret);\n});\n\nconst __wbg_then_45c887a50a229274 = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).then(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_then_9d18941da21f7104 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_get_38f68ddea9e54820 = handleError(function(arg0, arg1) {\n    var ret = Reflect.get(getObject(arg0), getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_set_ede434d91072bd5f = handleError(function(arg0, arg1, arg2) {\n    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbindgen_string_get = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = typeof(obj) === 'string' ? obj : undefined;\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_closure_wrapper147 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 21, __wbg_adapter_23);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_closure_wrapper145 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 23, __wbg_adapter_26);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_closure_wrapper699 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 51, __wbg_adapter_20);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_closure_wrapper149 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 25, __wbg_adapter_29);\n    return addHeapObject(ret);\n});\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, start, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdb0e6f3d12acbfe0, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6781fac3a7c8ce61, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hca78871980b7352c, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3f59c18488e5bda3, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);