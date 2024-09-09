const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let boxes=document.querySelectorAll(".box")
let reset_game_btn=document.querySelector("#reset_btn")
let new_game_btn=document.querySelector("#new_game")
let review_game_btn=document.querySelector("#review_game")
let game=document.querySelector(".game");
let winner_container=document.querySelector(".winnerContainer")
let turnO=true;
new_game_btn.addEventListener("click",()=>
{
    winner_container.classList.add("hide");
    game.classList.remove("hide");
    reset_btn.classList.remove("hide");
    enableBox();
})
review_game_btn.addEventListener("click",()=>
{
    winner_container.classList.add("hide");
    game.classList.remove("hide");
    reset_btn.classList.remove("hide");
})
reset_game_btn.addEventListener("click",()=>{
    enableBox();
})
function disableBox()
{
    boxes.forEach((box)=>
    {
        box.disabled=true;
    })
}
function enableBox()
{
    boxes.forEach((box)=>
    {
        box.disabled=false;
        box.innerHTML=""
    })
    turnO=!turnO;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerHTML='O';
            box.style.color = '#6e1414';
            
        }
        else
        {
            box.innerHTML='X';
            box.style.color = '#793805';
            
        }

        box.disabled=true;
        turnO = !turnO; 
        determineWinner();
    })
})
function determineWinner()
{
    for(let winner of winPatterns)
    {
       let box1Val=boxes[winner[0]].innerHTML;
       let box2Val=boxes[winner[1]].innerHTML;
       let box3Val=boxes[winner[2]].innerHTML;

       if(box1Val!="" && box2Val!="" && box3Val!="")
       {
        if(box1Val===box2Val && box2Val===box3Val)
        {
            console.log(box1Val);
            disableBox();
            showwinner(box1Val);
        }
       }
    }
}
function showwinner(winner)
{ 
    winner_container.classList.remove("hide");
    document.querySelector("#winner").innerText=`Congratulations...!\n Player with Sign '${winner}' Win Game.`;
    game.classList.add("hide");
    reset_btn.classList.add("hide");
}