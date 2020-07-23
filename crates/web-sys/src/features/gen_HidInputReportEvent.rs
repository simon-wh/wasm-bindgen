#![allow(unused_imports)]
use super::*;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    # [ wasm_bindgen ( extends = Event , extends = :: js_sys :: Object , js_name = HIDInputReportEvent , typescript_type = "HIDInputReportEvent" ) ]
    #[derive(Debug, Clone, PartialEq, Eq)]
    #[doc = "The `HidInputReportEvent` class."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidInputReportEvent`*"]
    pub type HidInputReportEvent;
    #[cfg(feature = "HidDevice")]
    # [ wasm_bindgen ( structural , method , getter , js_class = "HIDInputReportEvent" , js_name = device ) ]
    #[doc = "Getter for the `device` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent/device)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidDevice`, `HidInputReportEvent`*"]
    pub fn device(this: &HidInputReportEvent) -> HidDevice;
    # [ wasm_bindgen ( structural , method , getter , js_class = "HIDInputReportEvent" , js_name = reportId ) ]
    #[doc = "Getter for the `reportId` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent/reportId)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidInputReportEvent`*"]
    pub fn report_id(this: &HidInputReportEvent) -> u8;
    #[cfg(feature = "HidInputReportEventInit")]
    #[wasm_bindgen(catch, constructor, js_class = "HIDInputReportEvent")]
    #[doc = "The `new HidInputReportEvent(..)` constructor, creating a new instance of `HidInputReportEvent`."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDInputReportEvent/HIDInputReportEvent)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidInputReportEvent`, `HidInputReportEventInit`*"]
    pub fn new(
        type_: &str,
        event_init_dict: &HidInputReportEventInit,
    ) -> Result<HidInputReportEvent, JsValue>;
}
