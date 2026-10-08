/* For Loop

1️⃣ Print "Hello" 5 times

2️⃣  Print numbers from 1 to 10

3️⃣ Print even numbers from 1 to 20

4️⃣ Print the sum of first 10 natural numbers

5️⃣ Print the multiplication table of 5 */


// for (let i=1 ; i<=5; i++)
// {
//     console.log(` ${i} times Hello`);
// }

// for (let i=1 ; i<=10; i++)
// {
//     console.log(` ${i} times number`);
// } 


// for (let i=1 ; i<=20; i++)
// {
//     if(i%2===0)
//     console.log(` ${i} is even number`);
//     else
//     console.log(` ${i} is odd number`);

// }  

// let sum=0;
// for (let i=1 ; i<=10; i++)
// {
//     sum+=i;
// }console.log("Sum of first 10 natural numbers is\t", sum);


// let mult_of_5="";
// let tableof=5;
// let mult_result=null;
// for(let i=1; i<=10;i++)
// {
//     mult_of_5 = tableof*i;
//     mult_result =mult_of_5;
//     console.log(mult_result+" ");
// }
//console.log("multiplication table of 5 is\t ", mult_result);




/* While Loop

1️⃣ Print "Playwright" 5 times

2️⃣ Print numbers from 1 to 10

3️⃣ Print even numbers from 1 to 20

4️⃣ Calculate sum of first 10 natural numbers

5️⃣ Print the multiplication table of 7  */


// let count=1;
// while(count<=5)
// {
//     console.log("Playwright")
//     count++;
// }

// let num=1;
// while(num<=10)
// {
//     console.log(`the number is\t : ${num}`);
//     num++;
// }


// let limit=1;
// while(limit<=20)
// {
//     if(limit%2===0)
//     {
//     console.log(`the number is\t : ${limit} even`);
    
//     }
//     else
//         console.log(`the number is\t : ${limit} odd`);

// limit++;
// }

// let count=1;
// let sum=0;
// while(count<=10)
// {
//    sum+=count;
//    count++;
// }
// console.log("sum of first 10 natural numbers is:\t",sum);



let mult_of_7=0;
let count=1;
while (count<=10)
{
    mult_of_7=7*count;
    console.log(mult_of_7);
    count++;
}