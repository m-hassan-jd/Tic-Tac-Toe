let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#res");
let newbtn = document.querySelector("#new");
let winAnnounce = document.querySelector("#win");
let msgCont = document.querySelector(".msgcon");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const resetBtns = () =>{
  turnO = true;
  enableBoxes();
  msgCont.classList.add("hide");
}

const showWinner = (winner) => {
  winAnnounce.innerText = ` winner is ${winner}`;
  msgCont.classList.remove("hide");
  disableBoxes();
}
const checkWinner = () => {
  for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val == pos2Val && pos2Val == pos3Val){
          showWinner(pos1Val);
      }
    }
  }
}
newbtn.addEventListener("click", resetBtns);
resetbtn.addEventListener("click", resetBtns);