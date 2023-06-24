// mendapatkan form element dan hasil
const form = document.getElementById('temperatureForm');
const resultDiv = document.getElementById('result');

// menambahkan event listener ke form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // mencegah page refresh di form submission

  // Get nilai value
  const temperatureInput = document.getElementById('temperature');
  const unitSelect = document.getElementById('unit');
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  // Validasi inputan
  if (isNaN(temperature)) {
    resultDiv.innerHTML = 'Please enter a valid temperature.';
    return;
  }

  // Menjalankan aski convert temperature
  let convertedTemperature, convertedUnit, conversionExplanation;
  if (unit === 'celsius') {
    convertedTemperature = (temperature * 9 / 5) + 32;
    convertedUnit = 'Fahrenheit';
    conversionExplanation = `${temperature} derajat Celsius setara dengan ${convertedTemperature} derajat Fahrenheit.`;
  } else {
    convertedTemperature = (temperature - 32) * 5 / 9;
    convertedUnit = 'Celsius';
    conversionExplanation = `${temperature} derajat Fahrenheit setara dengan ${convertedTemperature} derajat Celsius.`;
  }

  // Menampilkan Hasil
  resultDiv.innerHTML = `
    <p>Conversion Result:</p>
    <p>${conversionExplanation}</p>
  `;

  //create function for calculate degree
  
  
  // Reset form
  form.reset();
});
