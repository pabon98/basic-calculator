const buttons = document.querySelectorAll("button");
const output = document.getElementById("output");

buttons.forEach(function (button) {
  button.addEventListener("click", calculation);
});

function calculation(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === "=" && output.value !== "") {
    output.value = eval(output.value);
  } else if (clickedButtonValue === "AC") {
    output.value = "";
  } 
  else if (clickedButtonValue === "DEL")
  {
      output.value = output.value.substr(0,output.value.length-1);
  }
  else {
    output.value += clickedButtonValue;
  }
}


