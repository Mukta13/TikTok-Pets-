//just the start
//link to continue button
'use strict';
const continueButton = document.getElementById("continue");

//listener
continueButton.addEventListener("click", buttonAction);

//respond function
function buttonAction() {
  let info = document.getElementById("video").value;
  let userName = document.getElementById("username").value;
  let Url = document.getElementById("url").value;

  sessionStorage.setItem("pick",info);

  //sth like struct contain data
  let videoData= {
    "info" : info,
    "Url" : Url,
    "userName" : userName  
  }
  
  console.log("we got", info);
  sendPostRequest('/videoData',videoData)
    .then(function(data) {
      //it will just do the redirect now.
    window.location = "/redirect.html";  })
  .catch(function(error) {
    console.log("Error occurred:", error)
  });
  
  
}

//send post request to server
async function sendPostRequest(url,data) {
  console.log("about to send post request");
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    //stringigy make the struct we send into string
    body: JSON.stringify(data) });
  if (response.ok) {
    let data = await response.text();
    return data;
  } else {
    throw Error(response.status);
  }
}