const btnElement = document.getElementById('btn');
const bmiInputElement = document.getElementById('bmi-result');
const weightConditionElement = document.getElementById('weight-condition');

function calculateBMI() {
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputElement.value = bmiValue.toFixed(1);

  if (bmiValue < 18.5) {
    weightConditionElement.innerText = 'Underweight';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionElement.innerText = 'Normal Weight';
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionElement.innerText = 'Overweight';
  } else {
    weightConditionElement.innerText = 'Obesity';
  }
}

btnElement.addEventListener('click', calculateBMI);
