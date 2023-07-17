function convertTemperature() {
    let temperature = parseFloat(document.getElementById("inputTemperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let convertedTemperature;

    if (fromUnit === toUnit) {
      convertedTemperature = temperature;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9 / 5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      convertedTemperature = temperature + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5 / 9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = convertedTemperature.toFixed(2);
    resultElement.classList.add("show");
  }