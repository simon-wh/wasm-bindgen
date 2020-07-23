#![allow(unused_imports)]
use super::*;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    # [ wasm_bindgen ( extends = :: js_sys :: Object , js_name = HIDCollectionInfo , typescript_type = "HIDCollectionInfo" ) ]
    #[derive(Debug, Clone, PartialEq, Eq)]
    #[doc = "The `HidCollectionInfo` class."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDCollectionInfo)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidCollectionInfo`*"]
    pub type HidCollectionInfo;
    # [ wasm_bindgen ( structural , method , getter , js_class = "HIDCollectionInfo" , js_name = usagePage ) ]
    #[doc = "Getter for the `usagePage` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDCollectionInfo/usagePage)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidCollectionInfo`*"]
    pub fn usage_page(this: &HidCollectionInfo) -> u16;
    # [ wasm_bindgen ( structural , method , getter , js_class = "HIDCollectionInfo" , js_name = usage ) ]
    #[doc = "Getter for the `usage` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDCollectionInfo/usage)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidCollectionInfo`*"]
    pub fn usage(this: &HidCollectionInfo) -> u16;
}
