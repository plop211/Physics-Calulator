document.getElementById("btn1").addEventListener("click", calculateV);

function calculateV() {
  var distance1 = +document.getElementById("distance1").value;
  var time1 = +document.getElementById("time1").value;
  var span = document.getElementById("output1");
  var awnser = distance1 / time1;
  awnser = awnser.toFixed(2);
  document.getElementById("output1").innerHTML = `${awnser} m/s`;
}

document.getElementById("btn2").addEventListener("click", calculateK);

function calculateK() {
  var velocity1 = +document.getElementById("velocity1").value;
  var mass1 = +document.getElementById("mass1").value;
  var span = document.getElementById("output2");
  var awnser = (velocity1 ** 2 * mass1) / 2;
  awnser = awnser.toFixed(2);
  document.getElementById("output2").innerHTML = `${awnser} J`;
}

document.getElementById("btn3").addEventListener("click", calculateP);

function calculateP() {
  var mass2 = +document.getElementById("mass2").value;
  var height1 = +document.getElementById("height1").value;
  var span = document.getElementById("output3");
  var awnser = mass2 * height1 * 9.81;
  awnser = awnser.toFixed(2);
  document.getElementById("output3").innerHTML = `${awnser} J`;
}

document.getElementById("btn4").addEventListener("click", calculateM);

function calculateM() {
  var kenetic1 = +document.getElementById("kenetic1").value;
  var potential1 = +document.getElementById("potential1").value;
  var span = document.getElementById("output4");
  var awnser = kenetic1 + potential1;
  awnser = awnser.toFixed(2);

  document.getElementById("output4").innerHTML = `${awnser} J`;
}
