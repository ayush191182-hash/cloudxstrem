let coins = Number(localStorage.getItem("coins")) || 0;
let adsWatched = Number(localStorage.getItem("adsWatched")) || 0;

function updateUI() {
  document.getElementById("coins").innerText = coins;
  document.getElementById("time").innerText = Math.floor(coins * 2);

  let c2 = document.getElementById("coins2");
  if (c2) c2.innerText = coins;

  localStorage.setItem("coins", coins);
}

function watchAd() {
  coins += 3;
  updateUI();
}

function buyTime() {
  coins += 30;
  updateUI();
}

function playGame() {
  if (coins < 5) {
    alert("Not enough coins");
    return;
  }

  coins -= 5;
  updateUI();

  document.getElementById("gameLoader").style.display = "flex";

  setTimeout(() => {
    document.getElementById("gameLoader").style.display = "none";
    alert("Game Launched 🎮");
  }, 2000);
}

function searchGame() {
  let input = document.getElementById("search").value.toLowerCase();
  let games = document.querySelectorAll(".game-card");

  games.forEach(game => {
    let name = game.getAttribute("data-name");
    game.style.display = name.includes(input) ? "block" : "none";
  });
}

function filterGame(type) {
  let games = document.querySelectorAll(".game-card");

  games.forEach(game => {
    let t = game.getAttribute("data-type");

    if (type === "all" || t === type) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}

function showScreen(screen) {
  document.querySelectorAll("div").forEach(d => {
    if (d.id === "home" || d.id === "wallet" || d.id === "profile") {
      d.style.display = "none";
    }
  });

  document.getElementById(screen).style.display = "block";
}

function login() {
  localStorage.setItem("loggedIn", "true");
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("home").style.display = "block";
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1000);

  updateUI();

  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
};