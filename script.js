var playPlayer = 1;

const objPlayPlayer = document.getElementById("playPlayer");

function place(e) {
  fillCase(e);
  equalityTest();
  winTest();
}

function classListVerif(obj) {
  for (let i = 1; i <= 9; i++) {
    let result = obj.classList.contains("case" + i);
    if (result) {
      return i;
    }
  }
}

function fillCase(obj) {
  if (obj.innerHTML.length == 0) {
    if (playPlayer == 1) {
      addCircle(obj);
      playPlayer = 2;
      objPlayPlayer.innerHTML = "Au joueur CROIX de jouer";
    } else {
      addCross(obj);
      playPlayer = 1;
      objPlayPlayer.innerHTML = "Au joueur CERCLE de jouer";
    }
  }
}

function addCross(obj) {
  obj.innerHTML = `<svg height="200" width="200">
  <line x1="30" y1="30" x2="170" y2="170" style="stroke:rgb(0,0,0);stroke-width:2"/>
  <line x1="170" y1="30" x2="30" y2="170" style="stroke:rgb(0,0,0);stroke-width:2"/></svg>`;
  obj.classList.add("CROIX");
}

function addCircle(obj) {
  obj.innerHTML = `<svg height="200" width="200">
  <circle cx="100" cy="100" r="70" stroke="black" stroke-width="2" fill="white"/></svg>`;
  obj.classList.add("CERCLE");
}

var section = document.querySelector("#message");

function equalityTest() {
  let plateau = document.getElementById("plateau").children;
  if (
    !plateau[0].innerHTML.length == 0 &&
    !plateau[1].innerHTML.length == 0 &&
    !plateau[2].innerHTML.length == 0 &&
    !plateau[3].innerHTML.length == 0 &&
    !plateau[4].innerHTML.length == 0 &&
    !plateau[5].innerHTML.length == 0 &&
    !plateau[6].innerHTML.length == 0 &&
    !plateau[7].innerHTML.length == 0 &&
    !plateau[8].innerHTML.length == 0
  ) {
    if (section.innerHTML.length == 0) {
      section.innerHTML += `<div id="fenetre"><p>EGALITE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
  } else {
    return false;
  }
}

function winTest() {
  let plateau = document.getElementById("plateau").children;
  let signe = "CERCLE";
  for (let i = 0; i < 2; i++) {
    if (
      plateau[0].classList.contains(signe) &&
      plateau[1].classList.contains(signe) &&
      plateau[2].classList.contains(signe)
    ) {
      plateau[0].style.background = "green";
      plateau[1].style.background = "green";
      plateau[2].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[3].classList.contains(signe) &&
      plateau[4].classList.contains(signe) &&
      plateau[5].classList.contains(signe)
    ) {
      plateau[3].style.background = "green";
      plateau[4].style.background = "green";
      plateau[5].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[6].classList.contains(signe) &&
      plateau[7].classList.contains(signe) &&
      plateau[8].classList.contains(signe)
    ) {
      plateau[6].style.background = "green";
      plateau[7].style.background = "green";
      plateau[8].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[0].classList.contains(signe) &&
      plateau[3].classList.contains(signe) &&
      plateau[6].classList.contains(signe)
    ) {
      plateau[0].style.background = "green";
      plateau[3].style.background = "green";
      plateau[6].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[1].classList.contains(signe) &&
      plateau[4].classList.contains(signe) &&
      plateau[7].classList.contains(signe)
    ) {
      plateau[1].style.background = "green";
      plateau[4].style.background = "green";
      plateau[7].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[2].classList.contains(signe) &&
      plateau[5].classList.contains(signe) &&
      plateau[8].classList.contains(signe)
    ) {
      plateau[2].style.background = "green";
      plateau[5].style.background = "green";
      plateau[8].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[0].classList.contains(signe) &&
      plateau[4].classList.contains(signe) &&
      plateau[8].classList.contains(signe)
    ) {
      plateau[0].style.background = "green";
      plateau[4].style.background = "green";
      plateau[8].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    if (
      plateau[2].classList.contains(signe) &&
      plateau[4].classList.contains(signe) &&
      plateau[6].classList.contains(signe)
    ) {
      plateau[2].style.background = "green";
      plateau[4].style.background = "green";
      plateau[6].style.background = "green";
      section.innerHTML += `<div id="fenetre"><p>${signe} A GAGNE</p><button id="restart" onclick="reset()">REJOUER</button></div>`;
    }
    signe = "CROIX";
  }
}

function reset() {
  let plateau = document.getElementById("plateau").children;
  Array.from(plateau).forEach((e) => {
    e.classList.remove("CROIX", "CERCLE");
    e.innerHTML= "";
    e.style.background = "white";
  });
  section.innerHTML = "";
}

