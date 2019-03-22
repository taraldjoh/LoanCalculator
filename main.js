// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("results").style.display = "none";
  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 300);

  e.preventDefault();
});

// Calculate results
function calculateResults() {
  console.log("Calculating...");

  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute Monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show Results
    document.getElementById("results").style.display = "block";

    // Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("You did not enter all fields. Please check your inputs!");
  }
}

// ShowError
function showError(error) {
  // Show Results
  document.getElementById("results").style.display = "hide";

  // Hide Loader
  document.getElementById("loading").style.display = "none";
  //Create div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Add Text
  errorDiv.appendChild(document.createTextNode(error));

  // Insert Error Above Heading
  card.insertBefore(errorDiv, heading);

  // Clear Error After 2,5 Seconds
  setTimeout(clearError, 2500);
}

//Clear error
function clearError() {
  document.querySelector(".alert").remove();
}

// Format input text to decimal
document.getElementById("amount").addEventListener("input", function() {
  // document.getElementById("amount").value = new Intl.NumberFormat("en-CA", {
  //   style: "decimal"
  // }).format(
  //   document
  //     .getElementById("amount")
  //     .value.match(/\d+/g)
  //     .join("")
  // );
});

// Validate Amount Input Form
document.getElementById("amount").addEventListener("input", function() {
  if (isNaN("amount")) {
    amount.setAttribute("Disabled", true);
    showError("Please Enter A Number!");

    setTimeout(amount.setAttribute("Disabled", true), 2500);
  }
});

function disableInput() {
  // Disables Input Field And Displays Error Message
  if (isNaN === true) {
  } else {
  }
}
