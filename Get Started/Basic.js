
// //Dynamic Type

// let x=10
// console.log(x)
// console.log(typeof(x))
// x="AoA Pak"
// console.log(x)
// console.log(typeof(x))



// //Objects


// const profile={
//     userNme:"ALi",
//     followers:10000,
//     following:100,
//     Bio:"Never share your paln with everyone,only show your result"
// }
// // console.log(profile)
// // console.log(typeof(profile))
// console.log(typeof(profile.Bio))


// // Aritematic operators

// let a=5
// let b=2
// console.log("a=",a," b=",b)
// console.log("a + b=",a+b)
// console.log("a - b=",a-b)
// console.log("a * b=",a*b)
// console.log("a / b=",a/b)
// console.log("a ** b=",a**b)
// console.log("a % b=",a%b)

//Logical and camparison operator

// let grade;
// let score=90;

// if(score>=90 && score<=100)
// {
//     grade="A";
// }
// else if(score>=80 && score<90)
// {
//     score="B"
// }
// else if(score>=70 && score<80)
// {
//     grade="C"
// }
// else if(score>=60 && score<69)
// {
//     grade="D"
// }
// else if(score>=50 && score<60)
// {
//     grade="E"
// }
// else
// {
//     grade="F"
// }
// console.log("Your Grade:",grade)


//Loops

// for(let i=0;i<100;i++)
// {
//     if(i%2==0)
//         console.log(i)
// }

//let i=0;
// while(i<100)
// {
//     if(i%2==0)
//         console.log(i);
//     i++;
// }

// do
// {
//     if(i%2==0)
//         console.log(i);
//     i++;

// }while(i<100)

//for of loop (usualy use for array and string)

//let str="AoA Pakistan"
// for(let i of str)
// {
//     console.log(i)
// }

//for in loop (use for object and array, it give key)

// for(let i in str)
// {
//     console.log(str[i])
// }

// const profile={
//     userNme:"ALi",
//     followers:10000,
//     following:100,
//     Bio:"Never share your paln with everyone,only show your result"
// }

// for(let i in profile)
// {
//     console.log(`Key:${i} Value:${profile[i]}`)
// }

//Arrays

let  companies=["Bloomberg","Microsoft","Uber","Google","IBM","NetFlix"]
// for(let i of companies)
// {
//     console.log(i);
// }

//Remove first company

// companies.shift()   //shift remove first & pop remove last
// console.log(companies)

//Remove Uber and ola in its place

// companies.splice(2,1,"Ola")   //splice use to add ,replace, delete from array syntax <array_name>,splice(<start_index>,<Number of element delete>,<elements add>)
// console.log(companies)

// Add amazon at end

// companies.push("Amazon")   //push add at last & unshift add at start
// console.log(companies)


//try catch

let a=5
let b=2

console.log("a=",a," b=",b)
try
{
console.log("a + b=",a+c)
}
catch(err)
{
    console.log(err);
}
console.log("a - b=",a-b)
console.log("a * b=",a*b)
console.log("a / b=",a/b)
console.log("a ** b=",a**b)
console.log("a % b=",a%b)
