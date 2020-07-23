#![allow(unused_imports)]
use super::*;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    # [ wasm_bindgen ( extends = :: js_sys :: Object , js_name = HIDReportInfo , typescript_type = "HIDReportInfo" ) ]
    #[derive(Debug, Clone, PartialEq, Eq)]
    #[doc = "The `HidReportInfo` class."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDReportInfo)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidReportInfo`*"]
    pub type HidReportInfo;
    # [ wasm_bindgen ( structural , method , getter , js_class = "HIDReportInfo" , js_name = reportId ) ]
    #[doc = "Getter for the `reportId` field of this object."]
    #[doc = ""]
    #[doc = "[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HIDReportInfo/reportId)"]
    #[doc = ""]
    #[doc = "*This API requires the following crate features to be activated: `HidReportInfo`*"]
    pub fn report_id(this: &HidReportInfo) -> u8;
}
