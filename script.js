/****************************/
/*    KRESLÍCÍ ČTVEREČEK    */
/*  Autor: František Belay  */
/* Kontakt: frabel@volny.cz */
/****************************/

let myDiv = document.querySelector(".square"); // Vyber element s classou ".square"
let myMain = document.querySelector(".main"); // Vyber element s classou ".main"

let newLeft = null; // výchozí pozice pro pohyb DOLEVA, DOPRAVA = PRÁZDNÁ
let newTop = null; // výchozí pozice pro pohyb NAHORU, DOLŮ = PRÁZDNÁ

// Zaznamenej stisk klávesy, pokaždé vytvoř element <div> s classou "square-trail":
document.querySelector("body").addEventListener("keydown", function (event) {
  let prevSquare = document.createElement("div");
  prevSquare.classList.add("square-trail");
  myMain.appendChild(prevSquare);

  // Získá šířku čtverečku:
  let squareWidth = parseInt(getComputedStyle(myDiv).getPropertyValue("width"));

  // Získá výšku čtverečku:
  let squareHeight = parseInt(
    getComputedStyle(myDiv).getPropertyValue("height")
  );

  // Směry pohybů stopy tverečku podle stisku kurzorové klávesy:
  if (event.key === "ArrowLeft") {
    newLeft = newLeft - 4;
    myDiv.style.left = newLeft + "px"; // dosadí hodnotu + rozměr (px)
  } else if (event.key === "ArrowRight") {
    newLeft = newLeft + 4;
    myDiv.style.left = newLeft + "px"; // dosadí hodnotu + rozměr (px)
  } else if (event.key === "ArrowUp") {
    newTop = newTop - 4;
    myDiv.style.top = newTop + "px"; // dosadí hodnotu + rozměr (px)
  } else if (event.key === "ArrowDown") {
    newTop = newTop + 4;
    myDiv.style.top = newTop + "px"; // dosadí hodnotu + rozměr (px)
  }

  // Nastaví pozici stopy tak, aby vycházela ze středu čtverečku:
  prevSquare.style.left = newLeft + squareWidth / 2.71717171 + "px";
  prevSquare.style.top = newTop + squareHeight / 2.71717171 + "px";
});

window.addEventListener("resize", function () {
  varelement = document.getElementById("mojeElementID");
  varwindowWidth = window.innerWidth;
  if (windowWidth < 768) {
    // Příklad prahu šířky okna pro mobilní zařízení
    element.classList.add("aktivni");
  } else {
    element.classList.remove("aktivni");
  }
});
