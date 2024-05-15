const btnElement = document.getElementById('btn');
const bmiInputElement = document.getElementById('bmi-result');
const weightConditionElement = document.getElementById('weight-condition');

function calculateBMI() {
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputElement.value = bmiValue.toFixed(1);

  let normalWeightMin = 18.5 * (heightValue * heightValue);
  let normalWeightMax = 24.9 * (heightValue * heightValue);

  if (bmiValue < 18.5) {
    weightConditionElement.innerText = `Underweight 🙁 \n (${Math.abs(
      weightValue - normalWeightMin
    ).toFixed(1)} kg below Normal Weight)`;
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    weightConditionElement.innerText =
      'Normal Weight 🙂 \n (Healthy BMI: 18.5–25)';
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionElement.innerText = `Overweight 🙁 \n (${Math.abs(
      weightValue - normalWeightMax
    ).toFixed(1)} kg above Normal Weight)`;
  } else {
    weightConditionElement.innerText = `Obesity ☹️ \n (${Math.abs(
      weightValue - normalWeightMax
    ).toFixed(1)} kg above Normal Weight)`;
  }
}

btnElement.addEventListener('click', calculateBMI);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calculateBMI();
  }
});
