const KEY_DATA = "data";

function getObject(key) {
  return JSON.parse(localStorage.getItem(key));
}

function changeCases(num) {
  document.getElementById("cases").innerHTML = `Casos: ${num}`;
}

function changeSuspects(num) {
  document.getElementById("suspects").innerHTML = `Suspeitos: ${num}`;
}

function changeDeaths(num) {
  document.getElementById("deaths").innerHTML = `Mortes: ${num}`;
}

function init() {
  const data = getObject(KEY_DATA);

  changeCases(data.cases);
  changeSuspects(data.suspects);
  changeDeaths(data.deaths);
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    init();
  },
  false
);
