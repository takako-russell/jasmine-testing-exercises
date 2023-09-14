let monthly;
let defaultRateVals = {};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      console.log("i'm clicked");
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountDflt = "300000";
  const yearsDflt = "30";
  const rateDflt = "5";

  let loanAmtInput = document.getElementById("loan-amount");
  let loanYrsInput = document.getElementById("loan-years");
  let loanRateInput = document.getElementById("loan-rate");

  loanAmtInput.value = amountDflt;
  loanYrsInput.value = yearsDflt;
  loanRateInput.value = rateDflt;

  // defaultRateVals = {
  //   amount: amountDflt,
  //   years: yearsDflt,
  //   rate: rateDflt,
  // };
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = values.rate / 100 / 12;
  let n = Math.floor(values.years * 12);
  let P = values.amount;
  return ((P * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = "$" + monthly;
}
