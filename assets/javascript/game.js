let teamoneshots = document.querySelector("#teamone-numshots");
let teamoneshotbutton = document.querySelector("#teamone-shoot-button");
let teamonegoals = document.querySelector("#teamone-numgoals");
let shotstakencount1 = 0;
let goalsmade1 = 0;
teamoneshotbutton.addEventListener("click", function () {
  shotstakencount1 = shotstakencount1 + 1;
  teamoneshots.innerHTML = shotstakencount1;
  if (Math.random() * 100 < 50) {
    goalsmade1 = goalsmade1 + 1;
    teamonegoals.innerHTML = goalsmade1;
    console.log("hi");
  }
});

let teamtwoshots = document.querySelector("#teamtwo-numshots");
let teamtwosshotbutton = document.querySelector("#teamtwo-shoot-button");
let teamtwogoals = document.querySelector("#teamtwo-numgoals");
let shotstakencount2 = 0;
let goalsmade2 = 0;
teamtwosshotbutton.addEventListener("click", function () {
  shotstakencount2 = shotstakencount2 + 1;
  teamtwoshots.innerHTML = shotstakencount2;
  if (Math.random() * 100 < 50) {
    goalsmade2 = goalsmade2 + 1;
    teamtwogoals.innerHTML = goalsmade2;
    console.log("hi");
  }
});

let resetbutton = document.querySelector("#reset-button");
let numberofresets = document.querySelector("#num-resets");
let numofresets = 0;
resetbutton.addEventListener("click", function () {
  numofresets = numofresets + 1;
  numberofresets.innerHTML = numofresets;
  console.log;
  shotstakencount1 = 0;
  teamoneshots.innerHTML = shotstakencount1;
  shotstakencount2 = 0;
  teamtwoshots.innerHTML = shotstakencount2;
  goalsmade1 = 0;
  teamonegoals.innerHTML = goalsmade1;
  goalsmade2 = 0;
  teamtwogoals.innerHTML = goalsmade2;
});
