// 🔥 Gold price per ounce (USD)
let goldUSDperOunce = 2050;

// 🔥 USD to INR rate
let usdToInr = 83;

// Calculate price per gram
let goldINRperGram = (goldUSDperOunce / 31.1035) * usdToInr;

let gold24 = Math.round(goldINRperGram);
let gold22 = Math.round(gold24 * 0.92);
let silver = Math.round(gold24 / 75);

// Show prices
document.getElementById("gold24").innerHTML =
  "₹ " + gold24 + " / gram";

document.getElementById("gold22").innerHTML =
  "₹ " + gold22 + " / gram";

document.getElementById("silver").innerHTML =
  "₹ " + silver + " / gram";

// Calculator
function calculate(){
  let weight = document.getElementById("weight").value;
  let total = weight * gold24;

  document.getElementById("result").innerHTML =
    "Total Price (24K): ₹ " + total;
}