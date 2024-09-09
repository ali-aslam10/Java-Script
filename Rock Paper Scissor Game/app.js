let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userScoretext=document.querySelector("#userscore");
const compscoretext=document.querySelector("#compscore");
const message=document.querySelector(".message")




const GameDraw=()=>
{
    message.innerText="Game Draw....!"
    message.style.backgroundColor="black";
}
const showWinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userScore++
        message.innerText=`You Win..!Your ${userchoice.toUpperCase()} beats ${compchoice.toUpperCase()}`;
        message.style.backgroundColor="green";
        userScoretext.innerText=userScore;
    }
    else
    {
        compScore++;
        message.innerText=`You Lose..!${compchoice.toUpperCase()} beats Your ${userchoice.toUpperCase()}`;
        message.style.backgroundColor="red";
        compscoretext.innerText=compScore;
    }

}

function PlayGame(userchoice)
{
    const options=["rock","paper","scissor"]
    const idx=Math.floor(Math.random()*3)
    const compchoice=options[idx]
    if(compchoice===userchoice)
    {
        GameDraw();
    }
    else
    {
        let userwin=true;

        if(userchoice==="rock")
        {
            //paper,scissor
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            //rock,scissor
            userwin=compchoice==="scissor"?false:true;
        }
        else
        {
            //rock,paper
            userwin=compchoice==="rock"?false:true;

        }
        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>
{
  
    choice.addEventListener("click",()=>
    {

        userchoice=choice.getAttribute("id");
        PlayGame(userchoice)
    })
})
