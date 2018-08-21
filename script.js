var slider = document.getElementById("myRange");
var slider1 = document.getElementById("myRange1");
var output = document.getElementById("demo1");
var output1 = document.getElementById("demo")
var billPerPerson = document.getElementById("bill");
var tipPerPerson = document.getElementById("tipPerPerson");
var totalBill = document.getElementById("totalbill")
output.innerHTML = slider.value;
output1.innerHTML = slider.value;

function calculateBills() {
  let tip = Number(slider.value),
  bill = Number(totalBill.value),
  count = Number(slider1.value);
  let tipAmount = tip * bill * 0.01;

  output.innerHTML = tip;
  output1.innerHTML = count;
  billPerPerson.innerHTML =  (bill + tipAmount) / count;
  tipPerPerson.innerHTML =  tipAmount / count;
}

slider.oninput = calculateBills;
totalBill.oninput = calculateBills;
slider1.oninput = calculateBills;
