function unitConvert() {
    const el = document.getElementById("numUnits").value;
    const selection = document.getElementById("unitList").value;
    const result = document.getElementById("result");

    checkConversion(selection, el, result);
}

function checkConversion(selection, el, result) {
    if (selection === "Pounds to Kilograms") {
        result.innerHTML = "Result: " + (el*0.453) + " kg";
    }
    else if (selection === "Miles to Kilometers") {
        result.innerHTML = "Result: " + (el*1.609) + " km";
    }
    else if (selection === "Feet to Meters") {
        result.innerHTML = "Result: " + (el*0.305) + " m";
    }

    return result.innerHTML;
}