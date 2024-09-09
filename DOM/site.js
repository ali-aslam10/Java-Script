// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+" from Pakistan";
// let boxdivs=document.querySelectorAll(".box")
// let idx=0
// for(div of boxdivs)
// {
   
//     div.innerText=`Unique text for div ${++idx}`;
// }

// create button set property and add as first Element in body

// let btn=document.createElement("button");
// btn.innerText="click me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn); //prepend add at start and append at last

//acces p tag with class content and add anoher class background

// let para=document.querySelector(".content")
// para.classList.add("background")

//change background color of body by toggle button
let changemode=document.querySelector("#mode")
let mode="Light"
let body= document.querySelector("body");
changemode.addEventListener("click",()=>
{
    if(mode==="Light")
    {
        body.classList.add("dark");
        body.classList.remove("light");
        changemode.innerText="Light Mode";
        mode="Dark"
    }
    else
    {
        body.classList.add("light");
        body.classList.remove("dark");
        changemode.innerText="Dark Mode";
        mode="Light"
    }
})

