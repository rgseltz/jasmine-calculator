window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    principal: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { principal: 100000, years: 10, rate: 4 };
  const principalUI = document.getElementById('loan-amount');
  principalUI.value = values.principal;
  const yearsUI = document.getElementById('loan-years');
  yearsUI.value = values.years;
  const rateUI = document.getElementById('loan-rate');
  rateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  console.log(currentUIValues);
  const monthlyPayment = calculateMonthlyPayment(currentUIValues);
  console.log(monthlyPayment)
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  const numerator = (monthlyRate * values.principal);
  const denom = (Math.pow(1 + monthlyRate, -n));
  // console.log(numerator / (1 - denom))
  return numerator / (1 - denom)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly);
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = `$${monthly}`;
  console.log(monthlyUI);
}