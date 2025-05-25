let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerx,playery

// | 0  1  2 |
// | 3  4  5 |
// | 6  7  8 |

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  enablebtns();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disabledbtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
const showWinner = () => {
  msg.innerHTML = "Congratulation, you are Winner";
  msgContainer.classList.remove("hide");
  disabledbtns();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner();
      }
    }
  }
};
newGamebtn.addEventListener("click", resetGame);
rbtn.addEventListener("click", resetGame);
