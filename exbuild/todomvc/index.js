/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_EventTarget_6a4bb51d820d4a32": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_EventTarget_6a4bb51d820d4a32"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_e26664ded96802d6": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_e26664ded96802d6"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_2d66e088a07e50c1": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_2d66e088a07e50c1"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_c41e4201af3be2fa": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeEventListener_c41e4201af3be2fa"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_location_d868356de4438cd1": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_location_d868356de4438cd1"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_ca5c7fc933a74206": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_body_ca5c7fc933a74206"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_2a0e776394ab0fae": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_createElement_2a0e776394ab0fae"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_711fdf3d5b39a3cd": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelectorAll_711fdf3d5b39a3cd"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getItem_5a53c566950c2181": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_getItem_5a53c566950c2181"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_6884e4d52a076b78": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setItem_6884e4d52a076b78"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_0e8decd0a6179699": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_0e8decd0a6179699"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_76c349f54c28c8fa": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_document_76c349f54c28c8fa"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_62f777b1184f4bea": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_localStorage_62f777b1184f4bea"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_67a9589b0f1c5c31": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlElement_67a9589b0f1c5c31"](p0i32);
/******/ 					},
/******/ 					"__wbg_dataset_5934bbe7cac3ac24": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_dataset_5934bbe7cac3ac24"](p0i32);
/******/ 					},
/******/ 					"__wbg_sethidden_0fccfb56dfa0473c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_sethidden_0fccfb56dfa0473c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_blur_73cac4fe789776c4": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_blur_73cac4fe789776c4"](p0i32);
/******/ 					},
/******/ 					"__wbg_focus_2617465192028e1c": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_focus_2617465192028e1c"](p0i32);
/******/ 					},
/******/ 					"__wbg_hash_807752e2195bb755": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_hash_807752e2195bb755"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_target_296eba31ead5b0a6": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_target_296eba31ead5b0a6"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_0a70e9ff9d0b643e": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_0a70e9ff9d0b643e"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_240f8791ace5236b": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_set_240f8791ace5236b"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Node_11254aed560b4c66": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Node_11254aed560b4c66"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_4bab12799c3e8218": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parentElement_4bab12799c3e8218"](p0i32);
/******/ 					},
/******/ 					"__wbg_textContent_9808403e1e27d9d7": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_textContent_9808403e1e27d9d7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_40aa07df3f2a6336": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_settextContent_40aa07df3f2a6336"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_5a186a381c8fff5b": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_appendChild_5a186a381c8fff5b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_isEqualNode_7fc6687b01693eec": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isEqualNode_7fc6687b01693eec"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeChild_a5458e964695297f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeChild_a5458e964695297f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_add_1b19fef70ac6da51": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_add_1b19fef70ac6da51"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_502a44693e55f598": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_remove_502a44693e55f598"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_KeyboardEvent_b4c54a7c0c644df3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_KeyboardEvent_b4c54a7c0c644df3"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_17e8f56133de7330": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_keyCode_17e8f56133de7330"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Element_b2ea0d558fc7d331": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Element_b2ea0d558fc7d331"](p0i32);
/******/ 					},
/******/ 					"__wbg_setclassName_9ebf06a16f2b8ce8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setclassName_9ebf06a16f2b8ce8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_262889e9fed65a4e": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_classList_262889e9fed65a4e"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_f91b874a4e14e714": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setinnerHTML_f91b874a4e14e714"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_58b562b9232683e8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelector_58b562b9232683e8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_847b0961185c6e6a": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlInputElement_847b0961185c6e6a"](p0i32);
/******/ 					},
/******/ 					"__wbg_checked_e8318b03cf70291c": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_checked_e8318b03cf70291c"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_55afa5312070d694": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setchecked_55afa5312070d694"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_value_8ed9d1cd27bda7ca": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_8ed9d1cd27bda7ca"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_dc83a8a8a01a2b8d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setvalue_dc83a8a8a01a2b8d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_8a6a2efe955a8b70": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_length_8a6a2efe955a8b70"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_b98c84aa64400fbe": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_b98c84aa64400fbe"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_exception_c79375e0e81fc3f1": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_exception_c79375e0e81fc3f1"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_6b6f346b4912cdae": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_6b6f346b4912cdae"]();
/******/ 					},
/******/ 					"__wbg_isArray_9daeb1a30751fdc8": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isArray_9daeb1a30751fdc8"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_f353108e20ec67a0": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_push_f353108e20ec67a0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_d7aab142367ca153": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_shift_d7aab142367ca153"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_db0587fa712f9acc": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_db0587fa712f9acc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_79ca0d435495a83a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_79ca0d435495a83a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_e030af76ecee0845": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_e030af76ecee0845"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_a5e2b0997b86e2bd": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_a5e2b0997b86e2bd"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_de5d8d9e2bd53827": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_done_de5d8d9e2bd53827"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_78cc1e08158c2a75": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_78cc1e08158c2a75"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_7ba9ba3df5cf5037": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_now_7ba9ba3df5cf5037"]();
/******/ 					},
/******/ 					"__wbg_iterator_a4f28df7fe8b902c": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_iterator_a4f28df7fe8b902c"]();
/******/ 					},
/******/ 					"__wbg_globalThis_68afcb0d98f0112d": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_68afcb0d98f0112d"]();
/******/ 					},
/******/ 					"__wbg_self_d1b58dbab69d5bb1": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_d1b58dbab69d5bb1"]();
/******/ 					},
/******/ 					"__wbg_window_de445cb18819ad4b": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_de445cb18819ad4b"]();
/******/ 					},
/******/ 					"__wbg_global_baed4e4fa850c0d0": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_baed4e4fa850c0d0"]();
/******/ 					},
/******/ 					"__wbg_get_38f68ddea9e54820": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_38f68ddea9e54820"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_parse_bf586351f316755f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parse_bf586351f316755f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_3fc643254945f1e0": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stringify_3fc643254945f1e0"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper466": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper466"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper468": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper468"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"78697931b77075aef4af"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });