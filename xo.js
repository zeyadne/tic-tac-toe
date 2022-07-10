let counter = 0; //counts steps
let saveCounter = 0; // saves the steps counter to reload the game
let winner = false; // stops the game when there is a winner
let gameArr = []; // contains the game details
let saveGameArr = []; // contains the saved game
let scoresArr = []; // saves the game scores
let clickedArr = []; // contains the ids of the clicked cells to use later for going backwards
let score = document.getElementById("score");
let h1 = document.getElementById("header");
function xoFunc(tdId) {
  // stop game when someone wins ====================
  if (winner) {
    return;
  }
  // start the game =================================
  counter++;
  clickedArr.push(tdId); // add the id of the clicked cell to use it later to go backwards
  let img = document.createElement("img");
  let tdObj = document.getElementById(tdId);
  let h1 = document.getElementById("header");
  let btn = document.getElementById("btn");
  img.style.width = "150px";
  img.style.height = "150px";
  if (counter % 2 != 0) {
    img.src = "./x.png";
    tdObj.value = "x";
  } else {
    img.src = "./o.png";
    tdObj.value = "o";
  }
  if (tdObj.getElementsByTagName("img")[0] == null) {
    tdObj.appendChild(img);
  } else {
    counter--;
    alert("this one has been clicked");
  }
  switch (tdId) {
  }
  // load table cells
  let cll1 = document.getElementById("a1");
  let cll2 = document.getElementById("a2");
  let cll3 = document.getElementById("a3");
  let cll4 = document.getElementById("a4");
  let cll5 = document.getElementById("a5");
  let cll6 = document.getElementById("a6");
  let cll7 = document.getElementById("a7");
  let cll8 = document.getElementById("a8");
  let cll9 = document.getElementById("a9");
  // save table cells into array to clone them later to save the game
  gameArr = [cll1, cll2, cll3, cll4, cll5, cll6, cll7, cll8, cll9];
  //   first player wins ===============================================
  if (
    (cll1.value == "x" && cll2.value == "x" && cll3.value == "x") ||
    (cll3.value == "x" && cll5.value == "x" && cll7.value == "x") ||
    (cll4.value == "x" && cll5.value == "x" && cll6.value == "x") ||
    (cll7.value == "x" && cll8.value == "x" && cll9.value == "x") ||
    (cll1.value == "x" && cll4.value == "x" && cll7.value == "x") ||
    (cll2.value == "x" && cll5.value == "x" && cll8.value == "x") ||
    (cll3.value == "x" && cll6.value == "x" && cll9.value == "x") ||
    (cll1.value == "x" && cll5.value == "x" && cll9.value == "x")
  ) {
    h1.innerText = "palyer 1 is the winner!!!";
    winner = true;
    h1.style.backgroundColor = "red";
    h1.style.animationName = "player1";
    h1.style.animationDuration = "1s";
    h1.style.animationIterationCount = "infinite";
    btn.style.display = "block";
    scoresArr.push(counter);
  }
  //   second player wins ===============================================
  else if (
    (cll1.value == "o" && cll2.value == "o" && cll3.value == "o") ||
    (cll3.value == "o" && cll5.value == "o" && cll7.value == "o") ||
    (cll4.value == "o" && cll5.value == "o" && cll6.value == "o") ||
    (cll7.value == "o" && cll8.value == "o" && cll9.value == "o") ||
    (cll1.value == "o" && cll4.value == "o" && cll7.value == "o") ||
    (cll2.value == "o" && cll5.value == "o" && cll8.value == "o") ||
    (cll3.value == "o" && cll6.value == "o" && cll9.value == "o") ||
    (cll1.value == "o" && cll5.value == "o" && cll9.value == "o")
  ) {
    h1.innerText = "player 2 is the winnr!!!";
    winner = true;
    h1.style.backgroundColor = "#42a5f5";
    h1.style.animationName = "player2";
    h1.style.animationDuration = "1s";
    h1.style.animationIterationCount = "infinite";
    btn.style.display = "block";
    scoresArr.push(counter);
  }
}
//   reset game ===============================================

function reset() {
  winner = false;
  counter = 0;
  score.innerText = "";
  for (let t = 0; t < gameArr.length; t++) {
    let td = document.getElementById(`a${t + 1}`);
    td.innerText = "";
    td.value = "";

    score.innerText = "";
    score.style.display = "none";
    h1.innerText = "Let's play!";
    h1.style = "margin-bottom: 25px; width: 100%; text-align: center";
  }
}
//   save game ===============================================
function saveGame() {
  gameArr.forEach((el) => {
    saveGameArr.push(el.value);
  });
  saveCounter = counter;
}
//   load the saved game ===============================================

function loadGame() {
  if (winner) {
    return;
  }
  reset();
  counter = saveCounter;
  gameArr = [];
  gameArr = [...saveGameArr];
  for (let i = 0; i < gameArr.length; i++) {
    let td = document.getElementById(`a${i + 1}`);
    let img = document.createElement("img");
    img.style.width = "150px";
    img.style.height = "150px";
    if (gameArr[i] === "x") {
      img.src = "./x.png";
      td.appendChild(img);
      td.value = "x";
    } else if (gameArr[i] === "o") {
      img.src = "./o.png";
      td.appendChild(img);
      td.value = "o";
    }
  }
}
//   highest score ===============================================
function highScore() {
  if (scoresArr.length > 0) {
    score.style.display = "block";
    score.innerText = Math.min(...scoresArr);
  } else {
    score.innerText = "";
    score.style.display = "none";
  }
}
//   step back ===============================================
function backWards() {
  if (clickedArr.length > 0 && !winner) {
    let td = document.getElementById(clickedArr.pop());
    td.innerHTML = "";
    td.value = "";
    counter--;
  }
}
