
function updateCostCalculation() {
  const annualCost = parseInt(document.getElementById('country-calc').value);
  const years = parseInt(document.getElementById('years-calc').value);
  const totalCost = annualCost * years;
  const withBuffer = Math.round(totalCost * 1.2); // 20% buffer
  
  document.getElementById('cost-result').innerHTML = `
    <div>Base Cost: $${totalCost.toLocaleString()}</div>
    <div style="color: #e74c3c;">With 20% Buffer: $${withBuffer.toLocaleString()}</div>
    <div style="font-size: 12px; color: #7f8c8d; margin-top: 5px;">
      Monthly savings needed: $${Math.round(withBuffer/12).toLocaleString()}
    </div>
  `;
}

// Event listeners for cost calculator
document.addEventListener('DOMContentLoaded', function() {
  const countryCalc = document.getElementById('country-calc');
  const yearsCalc = document.getElementById('years-calc');
  
  if (countryCalc && yearsCalc) {
    countryCalc.addEventListener('change', updateCostCalculation);
    yearsCalc.addEventListener('input', updateCostCalculation);
    updateCostCalculation(); // Initial calculation
  }
});
