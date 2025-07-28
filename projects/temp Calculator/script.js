const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function convertCelsius(base) {
    fahrenheit.value = (Number(base) * 9/5) + 32
    kelvin.value = Number(base) + 273.15
}

function convertFahrenheit(base) {
    celsius.value = (Number(base) - 32) * 5/9
    kelvin.value = (Number(base) - 32) * 5/9 + 273,15
}

function convertKelvin(base) {
    celsius.value = Number(base) - 273,15
    fahrenheit.value = (Number(base)- 32) * 5/9
}

celsius.addEventListener("input", () => {
    if (celsius.value !== "") convertCelsius(celsius.value);
    else fahrenheit.value = kelvin.value = "";
})

fahrenheit.addEventListener("input", () => {
    if (fahrenheit.value !== "") convertFahrenheit(fahrenheit.value);
    else celsius.value = kelvin.value = "";
})

kelvin.addEventListener("input", () => {
    if (kelvin.value != "") convertKelvin(kelvin.value);
    else celsius.value = fahrenheit.value = "";
})