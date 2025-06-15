// <p> values.
const mFt = document.getElementById("M-ft");
const ltrGal = document.getElementById("Ltr-gal");
const kgLbs = document.getElementById("kg-lbs");
// input values.
const conBtn = document.getElementById("convert-btn");
const inValue = document.getElementById("input-value");
// Conversion constants -----
const meterToFeet =  3.281;
const feetToMeter =  0.3048;
const literToGallon =  0.264;
const gallonToLiter =  4.54609;
const kiloToPound =  2.204;
const poundToKilo =  0.453592;

const input = document.querySelector("#input-value");

// input.addEventListener("input", function(){
//     let charCount = input.value.length;
//     let newWidth = Math.max(60, charCount * 10) + "px"; 
//     input.style.width = newWidth;
// });

input.addEventListener("input", () => {
    let baseWidth = 60; 
    let ctx = document.createElement("canvas").getContext("2d");
    ctx.font = window.getComputedStyle(input).font; // ✅ Get input font

    let textWidth = ctx.measureText(input.value).width; // ✅ Measure actual width
    input.style.width = `${Math.max(baseWidth, textWidth + 20)}px`; // ✅ Adjust dynamically
});


inValue.addEventListener("input", function(){
    let base = Number(inValue.value);
    console.log(base)
    mFt.textContent = `${base} meters = ${(base * meterToFeet).toFixed(2)} feet | ${base} feet = ${(feetToMeter * base).toFixed(2)} meters`;
    ltrGal.textContent = `${base} liters = ${(base * literToGallon).toFixed(2)} gallons | ${base} gallons = ${(gallonToLiter * base).toFixed(2)} liters`;
    kgLbs.textContent = `${base} kilos = ${(base * kiloToPound).toFixed(2)} pounds | ${base} pounds = ${(poundToKilo * base).toFixed(2)} kilos`;
    
})