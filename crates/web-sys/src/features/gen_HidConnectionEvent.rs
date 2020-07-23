#![allow(unused_imports)]
use super::*;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    # [ wasm_bindgen ( extends = Event , extends = :: js_sys :: Object , js_name = HIDConnectionEvent , typescript_type = "HIDConnectionEvent" ) ]
    #[derive(Debug, Clone, PartialEq, Eq)]
    #[doc = "The `HidConnectionEvent` class."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDConnectionEvent)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidConnectionEvent`*"]
    pub type HidConnectionEvent;
    #[cfg(feature = "HidDevice")]
    # [ wasm_bindgen ( structural , method , getter , js_class = "HIDConnectionEvent" , js_name = device ) ]
    #[doc = "Getter for the `device` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDConnectionEvent/device)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidConnectionEvent`, `HidDevice`*"]
    pub fn device(this: &HidConnectionEvent) -> HidDevice;
    #[cfg(feature = "HidConnectionEventInit")]
    #[wasm_bindgen(catch, constructor, js_class = "HIDConnectionEvent")]
    #[doc = "The `new HidConnectionEvent(..)` constructor, creating a new instance of `HidConnectionEvent`."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDConnectionEvent/HIDConnectionEvent)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidConnectionEvent`, `HidConnectionEventInit`*"]
    pub fn new(
        type_: &str,
        event_init_dict: &HidConnectionEventInit,
    ) -> Result<HidConnectionEvent, JsValue>;
}
