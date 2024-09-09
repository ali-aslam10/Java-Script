// FUnctions
// Syntax

// function <function_name>(<parameter list>)
// {
//     body
// }

//Calculate Factorial

// function findFactorial(num)
// {
    
//     for(let i=num-1;i>=1;i--)
//     {
//         num=num*i;
//     }
//     return num;
// }

// let x=10;
// console.log(`Factorial of ${x} is ${findFactorial(x)}`)

//calculate vowels string is in lower case

// function calculateVOwels(str)
// {

//     let count=0;
//     for(let i of str)
//     {
        
//         if(i.toUpperCase()==='A'||i.toUpperCase()==='E'||i.toUpperCase()==='I'||i.toUpperCase()==='O'||i.toUpperCase()==='U')
//             count++;

//     }
//     return count;
// }
// console.log(calculateVOwels("It is string in which there are 11 vowels"))

//Arrow Functions

let calculateSum=(a,b)=>{return a+b}
//console.log(calculateSum(10,9))

//High Order Functions
function averageOft2Numbers(a,b,calculateSum)
{
    return calculateSum(a,b)/2;
}
let num1=5;
let num2=25;
//console.log(`Average of ${num1} and ${num2} is ${averageOft2Numbers(num1,num2,calculateSum)}`)

//Array Meathods..

//Given an array of marks filter out marks greater than 90

let marks=[80,93,78,56,95,100,80]
let marksGreaterThan90=marks.filter(
    (val)=> {return val>90}
);
//console.log(marksGreaterThan90);

//Increament marks by 2 if less than 90

marks=marks.map(
    (val)=>{
        if (val<90)
        {
           return val+2;
        }
        return val;
    }
)
// console.log(marks)

//Find max marks

let maxMarks=marks.reduce(
    (pre,curr)=>
    {
        return pre>curr?pre:curr;
    }
)
console.log(`Max marks ${maxMarks}`)

//Find AVG marks

let totalMarks=marks.reduce(
    (pre,curr)=>
    {
        return pre+curr
    }
)
console.log(`Average Marks:${totalMarks/marks.length}`)


