var inp = document.getElementById("inp");
console.log(inp.value);

function calculation(num){
    console.log(num);
    inp.value +=num;
}

function result(){
    inp.value = eval(inp.value);
}
function clearInput(){
    inp.value = "";
}

function back(){
    inp.value = inp.value.slice(0,-1);
}

function calculatePercentage() {
    // Get the current input value as a number
    // var currentValue = parseFloat(inp.value);

    // Calculate the percentage (divide by 100)
    var result = currentValue / 100;

    // Update the input field with the result
    inp.value = result;
}

var inp = document.getElementById("inp");

// // Add an event listener to the input field
inp.addEventListener("input", function(event) {
    // Get the input value
    var inputValue = inp.value;
 event
    // Remove any non-numeric and non-operator characters
    var sanitizedValue = inputValue.replace(/[^0-9/*+\-.]/g, '');

    // Update the input field with the sanitized value
    inp.value = sanitizedValue;
});
