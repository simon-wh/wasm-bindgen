#![allow(unused_imports)]
use super::*;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    # [ wasm_bindgen ( extends = EventTarget , extends = :: js_sys :: Object , js_name = HID , typescript_type = "HID" ) ]
    #[derive(Debug, Clone, PartialEq, Eq)]
    #[doc = "The `Hid` class."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`*"]
    pub type Hid;
    # [ wasm_bindgen ( structural , method , getter , js_class = "HID" , js_name = onconnect ) ]
    #[doc = "Getter for the `onconnect` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID/onconnect)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`*"]
    pub fn onconnect(this: &Hid) -> Option<::js_sys::Function>;
    # [ wasm_bindgen ( structural , method , setter , js_class = "HID" , js_name = onconnect ) ]
    #[doc = "Setter for the `onconnect` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID/onconnect)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`*"]
    pub fn set_onconnect(this: &Hid, value: Option<&::js_sys::Function>);
    # [ wasm_bindgen ( structural , method , getter , js_class = "HID" , js_name = ondisconnect ) ]
    #[doc = "Getter for the `ondisconnect` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID/ondisconnect)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`*"]
    pub fn ondisconnect(this: &Hid) -> Option<::js_sys::Function>;
    # [ wasm_bindgen ( structural , method , setter , js_class = "HID" , js_name = ondisconnect ) ]
    #[doc = "Setter for the `ondisconnect` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID/ondisconnect)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`*"]
    pub fn set_ondisconnect(this: &Hid, value: Option<&::js_sys::Function>);
    # [ wasm_bindgen ( method , structural , js_class = "HID" , js_name = getDevices ) ]
    #[doc = "The `getDevices()` method."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID/getDevices)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`*"]
    pub fn get_devices(this: &Hid) -> ::js_sys::Promise;
    #[cfg(feature = "HidDeviceRequestOptions")]
    # [ wasm_bindgen ( method , structural , js_class = "HID" , js_name = requestDevice ) ]
    #[doc = "The `requestDevice()` method."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HID/requestDevice)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `Hid`, `HidDeviceRequestOptions`*"]
    pub fn request_device(this: &Hid, options: &HidDeviceRequestOptions) -> ::js_sys::Promise;
}
