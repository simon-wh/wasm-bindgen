#![allow(unused_imports)]
use super::*;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    # [ wasm_bindgen ( extends = :: js_sys :: Object , js_name = HIDDeviceRequestOptions ) ]
    #[derive(Debug, Clone, PartialEq, Eq)]
    #[doc = "The `HidDeviceRequestOptions` dictionary."]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidDeviceRequestOptions`*"]
    pub type HidDeviceRequestOptions;
}
impl HidDeviceRequestOptions {
    #[doc = "Construct a new `HidDeviceRequestOptions`."]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidDeviceRequestOptions`*"]
    pub fn new(filters: &::wasm_bindgen::JsValue) -> Self {
        #[allow(unused_mut)]
        let mut ret: Self = ::wasm_bindgen::JsCast::unchecked_into(::js_sys::Object::new());
        ret.filters(filters);
        ret
    }
    #[doc = "Change the `filters` field of this object."]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidDeviceRequestOptions`*"]
    pub fn filters(&mut self, val: &::wasm_bindgen::JsValue) -> &mut Self {
        use wasm_bindgen::JsValue;
        let r = ::js_sys::Reflect::set(
            self.as_ref(),
            &JsValue::from("filters"),
            &JsValue::from(val),
        );
        debug_assert!(
            r.is_ok(),
            "setting properties should never fail on our dictionary objects"
        );
        let _ = r;
        self
    }
}
