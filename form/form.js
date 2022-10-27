//const default = { "text:" "", backgroundColor: "white", textColor: "black", fontSize: "12" };

// update name field
let nameField = document.getElementById("nameField");

nameField.onkeydown = updateNameDisplay;
nameField.onkeyup = updateNameDisplay;

function updateNameDisplay() {
  var thisValue = nameField.value || "??";
  document.getElementById("textOutput").innerHTML = thisValue;
}

// bg color picker
var colorPicker = document.getElementById("bgcolor");
colorPicker.addEventListener("input", updateBgColor, false);

function updateBgColor(event) {
  document.getElementById("output").style.backgroundColor = event.target.value;
}

// text color picker
var colorPicker = document.getElementById("textColor");
colorPicker.addEventListener("input", updateTextColor, false);

function updateTextColor(event) {
  document.getElementById("output").style.color = event.target.value;
}

// font size slider changes
var slider = document.getElementById("myRange");
slider.addEventListener("input", updateFontSize, false);

function updateFontSize() {
  document.getElementById("output").style.fontSize = slider.value + "px";
}

// font type radio changes
var brush = document.getElementById("brush");
var courier = document.getElementById("courier");
var times = document.getElementById("times");

brush.addEventListener("change", function () {
  document.getElementById("output").style.fontFamily = "Brush Script MT";
});

times.addEventListener("change", function () {
  document.getElementById("output").style.fontFamily = "Times New Roman";
});

courier.addEventListener("change", function () {
  document.getElementById("output").style.fontFamily = "Courier New";
});


// reset button functionality
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset)

function reset() {
  document.getElementById("nameField").value= null;
  document.getElementById("bgcolor").value = "#ffffff";
  document.getElementById("textColor").value = "#000000";
  document.getElementById("myRange").value = "12";
  document.getElementById("brush").checked = false;
  document.getElementById("courier").checked = false;
  document.getElementById("times").checked = false; 
  document.getElementById("output").style.fontFamily = "Helvetica";
  document.getElementById("textOutput").innerHTML = null;
  document.getElementById("output").style.backgroundColor = null;
}
