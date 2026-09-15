const form = document.querySelector('#bmi-form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const results = document.querySelector('#results');

// Feet to CM Converter elements
const convertBtn = document.querySelector('#convert-btn');
const feetInput = document.querySelector('#feet');
const inchesInput = document.querySelector('#inches');
const convertFeedback = document.querySelector('#convert-feedback');

// Handle Feet to CM conversion
convertBtn.addEventListener('click', function () {
  const feet = parseFloat(feetInput.value);
  const inches = parseFloat(inchesInput.value) || 0;

  if ((isNaN(feet) || feet < 0) && (isNaN(inches) || inches < 0)) {
    convertFeedback.textContent = 'Please enter feet or inches.';
    convertFeedback.className = 'convert-feedback error';
    return;
  }

  const validFeet = isNaN(feet) || feet < 0 ? 0 : feet;
  const validInches = isNaN(inches) || inches < 0 ? 0 : inches;

  if (validFeet === 0 && validInches === 0) {
    convertFeedback.textContent = 'Please enter a value greater than 0.';
    convertFeedback.className = 'convert-feedback error';
    return;
  }

  // 1 foot = 30.48 cm, 1 inch = 2.54 cm
  const totalCm = (validFeet * 30.48 + validInches * 2.54).toFixed(1);

  // Fill in the height input
  heightInput.value = totalCm;

  convertFeedback.textContent = `✓ Converted: ${validFeet}ft ${validInches}in = ${totalCm} cm (applied!)`;
  convertFeedback.className = 'convert-feedback success';

  // Highlight height input briefly
  heightInput.focus();
});

// Handle BMI calculation
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Input validation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `<div class="error-message">Please provide a valid height in CM.</div>`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `<div class="error-message">Please provide a valid weight in KG.</div>`;
    return;
  }

  // BMI formula: weight (kg) / [height (m)]^2
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let categoryText = '';
  let categoryClass = '';

  if (bmi < 18.6) {
    categoryText = 'Under Weight';
    categoryClass = 'underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    categoryText = 'Normal Range';
    categoryClass = 'normal';
  } else {
    categoryText = 'Overweight';
    categoryClass = 'overweight';
  }

  results.innerHTML = `
    <div class="result-card">
      <div class="bmi-label">Your BMI</div>
      <div class="bmi-number">${bmi}</div>
      <div class="category-badge ${categoryClass}">${categoryText}</div>
    </div>
  `;
});
