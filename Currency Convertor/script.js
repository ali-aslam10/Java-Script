const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

//fetchData();

let dropdowns=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("form button");
let from=document.querySelector(".from select");
let to=document.querySelector(".to select");

async function fetchData() {
  let url=`${BASE_URL}/${from.value.toLowerCase()}.min.json`;
  let response = await fetch(url);  
  return (await response.json())[`${from.value.toLowerCase()}`][`${to.value.toLowerCase()}`];      
}
for(let select of dropdowns)
{
    for(currcode in countryList)
    {
        let option=document.createElement("option");
        option.value=currcode;
        option.innerText=currcode;
        if(select.name=="from" && option.value=="USD")
        {
          
          option.selected="selected";
        }
        else if(select.name=="to" && option.value=="PKR")
        {
       
          option.selected="selected";
        }
        select.appendChild(option);

    }
    select.addEventListener("change",(event)=>{
      updateFlag(event.target);
    });
}
function updateFlag(target)
{
  let currCode = target.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = target.parentElement.querySelector("img");
  img.src = newSrc;
}
async function convert()
{
  let amount=document.querySelector("form input");
  let value=amount.value;

  if(value==""||value<1)
  {
    value=1;
    amount.value=1;
  }
  let rate=await fetchData();
  let finalAmount=rate*value;
  document.querySelector(".msg").innerText=`${value} ${from.value} = ${finalAmount} ${to.value}`;
}
btn.addEventListener("click",(event)=>
{
  event.preventDefault();
  convert();
})
window.addEventListener("load",()=>
{
  convert();
})