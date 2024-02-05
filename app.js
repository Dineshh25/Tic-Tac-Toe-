let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX ,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame =() =>{
    turnO = true;
    enabledBoxes();
    msgcontainer.classList.add("hide");

};

const clickcount =() =>{

}

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("clicked")
    if (turnO){
        box.innerText = "O";
        box.style.color = "black";
        turnO = false;
    }
    else{
        box.innerText = "X";
        box.style.color ="green";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    })

})

const disabledBoxes =() => {
    for(let box of  boxes) {
        box.disabled = true;
    }
};
const enabledBoxes =() => {
    for(let box of  boxes) {
        box.disabled = false;
        box.innerText="";

    }
};

const showWinner = (Winner) => {
      msg.innerText=`Congratulations, Winner is ${Winner}`;
      msgcontainer.classList.remove("hide");
      disabledBoxes();   
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
    //   console.log("Winner",pos1Val);
      showWinner(pos1Val);
    }
    //   else(clickcount() === 9) {
    //  showWinner(None);

    // }
   }
    }
}

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);