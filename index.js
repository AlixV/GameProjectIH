let h1Element = document.querySelector("h1");
let selectColor = document.getElementById("clrSelect");

selectColor.oninput = function () {
  console.log(selectColor.value);
  h1Element.style.backgroundColor = selectColor.value;
};

const superDiv = document.getElementById("superDiv");
const userDiv = document.getElementById("userDiv");
const winnerDiv = document.getElementById("winnerDiv");

// USER DIV STYLE
userDiv.style.position = "relative";
userDiv.style.width = "80px";
userDiv.style.height = "80px";
userDiv.style.border = "2px ridge black";
userDiv.style.backgroundColor = "#93f5cf";
userDiv.style.opacity = "0.5";

let selectPosition = document.getElementById("poposition");
selectPosition.oninput = function () {
  console.log("selectPosition.value: ", selectPosition.value);
  userDiv.style.position = selectPosition.value;
  checkPosition();
};

const btnTop = document.getElementById("btn-top");
const inputTop = document.getElementById("top");
function handleValueTop() {
  console.log("inputTop.value ", inputTop.value);
  userDiv.style.top = `${inputTop.value}px`;
  checkPosition();
}
btnTop.addEventListener("click", handleValueTop);

const btnRight = document.getElementById("btn-right");
const inputRight = document.getElementById("right");
function handleValueRight() {
  userDiv.style.right = `${inputRight.value}px`;
  checkPosition();
}
btnRight.addEventListener("click", handleValueRight);

const btnBottom = document.getElementById("btn-bottom");
const inputBottom = document.getElementById("bottom");
function handleValueBottom() {
  userDiv.style.bottom = `${inputBottom.value}px`;
  checkPosition();
}
btnBottom.addEventListener("click", handleValueBottom);

const btnLeft = document.getElementById("btn-left");
const inputLeft = document.getElementById("left");
function handleValueLeft() {
  userDiv.style.left = `${inputLeft.value}px`;
  checkPosition();
}
btnLeft.addEventListener("click", handleValueLeft);
inputLeft.addEventListener("change", (event) => {
  userDiv.style.left = `${event.target.value}px`;
});

// CODE CHANGEMENT DE COULEUR
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor() {
  userDiv.innerHTML = `<span>PARTY TIME BABY !!!</span>`;
  // userDiv.innerHTML="PARTY TIME BABY !!!"
  userDiv.style.opacity = "1";
  userDiv.style.backgroundColor = generateRandomColor();
}

let intervalId;

function checkPosition() {
  let winnerDivPosition = winnerDiv.getBoundingClientRect();
  let userDivPosition = userDiv.getBoundingClientRect();

  if (
    winnerDivPosition.x === userDivPosition.x &&
    winnerDivPosition.y === userDivPosition.y
  ) {
    //userDiv.style.backgroundColor ="orange"; Fonctionne
    intervalId = setInterval(changeColor, 500);
    setTimeout(newRound, 3000);
  } else {
    userDiv.style.backgroundColor = "#93f5cf";
    if (intervalId) {
      clearInterval(intervalId);
      userDiv.innerHTML = "";
      userDiv.style.opacity = "0.5";
    }
  }
}

function newRound() {
  console.log(winnerDiv);
  let x = Math.floor(Math.random() * 420);
  let y = Math.floor(Math.random() * 720);
  console.log(x);
  console.log(y);
  winnerDiv.style.top = `${y}px`;
  winnerDiv.style.left = `${x}px`;
}

// 0/ const recup element
// ? / en quelle unité la value ?

// 1/ recup value de chaque bouton top/right/bottom/left
// 2/ manipuler l'element avec les inputs récup
// 3/ definir top/right/bottom/left
// 4/ voir comment ajouter position et offsets

// 5/ recup et comparer positionnement shadowDiv et userDiv
// 6/ => Element.getBoundingClientRect()

// const userDiv = document.createElement("div");
// superDiv.appendChild(userDiv);
// userDiv.setAttribute("id","userDiv")

//////////////
// let h1Element = document.querySelector('h1');
// let colorOption = document.querySelectorAll("#clrSelect option");
// console.log(colorOption);
// colorOption.forEach(element => element.addEventListener("click",function(){
//     h1Element.style.backgroundColor = colorOption.value;
//     console.log(colorOption.parentElement);}))
