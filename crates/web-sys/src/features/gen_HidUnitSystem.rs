#![allow(unused_imports)]
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
#[doc = "The `HidUnitSystem` enum."]
#[doc = ""]
#[doc = "*This API requires the following crate features to be activated: `HidUnitSystem`*"]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum HidUnitSystem {
    None = "none",
    SiLinear = "si-linear",
    SiRotation = "si-rotation",
    EnglishLinear = "english-linear",
    EnglishRotation = "english-rotation",
    VendorDefined = "vendor-defined",
    Reserved = "reserved",
}
