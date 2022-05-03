//just the start
//link to continue button
'use strict';

const report = document.getElementById("report");
let yourPick = sessionStorage.getItem("pick");
const continueButton = document.getElementById("continue");

//listener
continueButton.addEventListener("click", buttonAction);

//change video 'k' to 'content'
let msg = report.textContent;
msg = msg.replace("k", yourPick);

 report.textContent = msg


//respond function
function buttonAction() {
  window.location = "/tiktokpets.html";
}

