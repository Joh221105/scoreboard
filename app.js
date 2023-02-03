//----------------------------------- Variables --------------------------------------//

let count = 0;
let awayCount = 0;
let home = "home-display";
let away = "away-display";

//-----------------------------------Adding Class to Winning Team ----------------------//

function checkWinner() {
  if (count > awayCount) {
    document.getElementById("home-display").classList.add("winner");
    document.getElementById("away-display").classList.remove("winner");
  } else if (awayCount > count) {
    document.getElementById("away-display").classList.add("winner");
    document.getElementById("home-display").classList.remove("winner");
  } else {
    document.getElementById("away-display").classList.remove("winner");
    document.getElementById("home-display").classList.remove("winner");
  }
}

//--------------------------------------Increase Scores -------------------------------//

function addOne(team) {
  if (team == home) {
    count++;
    document.getElementById(`${team}`).innerText = count;
  } else {
    awayCount++;
    document.getElementById(`${team}`).innerText = awayCount;
  }
  checkWinner();
}

function addTwo(team) {
  if (team == home) {
    count += 2;
    document.getElementById(`${team}`).innerText = count;
  } else {
    awayCount += 2;
    document.getElementById(`${team}`).innerText = awayCount;
  }
  checkWinner();
}

function addThree(team) {
  if (team == home) {
    count += 3;
    document.getElementById(`${team}`).innerText = count;
  } else {
    awayCount += 3;
    document.getElementById(`${team}`).innerText = awayCount;
  }
  checkWinner();
}

//-----------------------------------Button Looping ----------------------------------//

document.getElementById("home-btns").addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "+1":
      addOne(home);
      break;
    case "+2":
      addTwo(home);
      break;
    case "+3":
      addThree(home);
      break;
  }
});

document.getElementById("away-btns").addEventListener("click", (e) => {
  switch (e.target.innerHTML) {
    case "+1":
      addOne(away, awayCount);
      break;
    case "+2":
      addTwo(away, awayCount);
      break;
    case "+3":
      addThree(away, awayCount);
      break;
  }
});
