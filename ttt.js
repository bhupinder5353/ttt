document.addEventListener("DOMContentLoaded", function () {
let turn=true;
let winstatus=false;
let cell=Array.from(document.getElementsByClassName("cell"));
let board=document.getElementById("board")
cell.forEach(function(cell){
    cell.addEventListener("click",click)
});

function click(event){
    if(winstatus){
        return;
    }
    let currentCell = event.target;
    if (turn) {
        currentCell.classList.add("x");
      } else {
        currentCell.classList.add("circle");
      }
    gameStatus();
    turn = !turn;
    setNextPlayerHint();
    }
    function setNextPlayerHint() {
        board.classList.remove("x"); 
        board.classList.remove("circle"); 
        if (turn) {
          board.classList.add("x");
        } else {
          board.classList.add("circle");
        }
      }
    function gameStatus() {
    let r11 = cell[0].classList[1];
    let r12 = cell[1].classList[1];
    let r13 = cell[2].classList[1];
    let r21 = cell[3].classList[1];
    let r22 = cell[4].classList[1];
    let r23 = cell[5].classList[1];
    let r31 = cell[6].classList[1];
    let r32 = cell[7].classList[1];
    let r33 = cell[8].classList[1];
   
    if (r11 && r11 === r12 && r11 === r13) {
      winstatus = true;
      return announceWinner();
    } else if (r21 && r21 === r22 && r21 === r23) {
      winstatus = true;
      return announceWinner();
    } else if (r31 && r31 === r32 && r31 === r33) {
      winstatus = true;
      return announceWinner();
    } else if (r11 && r11 === r21 && r11 === r31) {
      winstatus = true;
      return announceWinner();
    } else if (r12 && r12 === r22 && r12 === r32) {
      winstatus = true;
      return announceWinner();
    } else if (r13 && r13 === r23 && r13 === r33) {
      winstatus = true;
      return announceWinner();
    } else if (r11 && r11 === r22 && r11 === r33) {
      winstatus = true;
      return announceWinner();
    } else if (r13 && r13 === r22 && r13 === r31) {
      winstatus = true;
      return announceWinner();
    } else {
      checkDraw();
    }
  }
  function checkDraw(){
    for (let element of cell) {
      if (element.classList[1] === "x" || element.classList[1] === "circle") {
        continue;
      } else {
        return;
      }
    }
    document.getElementById("message").innerHTML = "DRAW";
    document.body.style.backgroundColor="red";
  }
  function announceWinner() {
    if (turn) {
      document.getElementById("message").innerHTML = "Winner is " + "PLAYER1";
    } else {
      document.getElementById("message").innerHTML = "Winner is " + "PLAYER2";
    }
    document.body.style.backgroundColor="green";
  }
});
