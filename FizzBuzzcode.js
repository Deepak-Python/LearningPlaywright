
let i = 1;
let fizz = 0;
let buzz = 0;
let fizzbuzz = 0;
let notdivisible = 0;
let numbernotdivisible = [];
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        fizzbuzz++;
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
        fizz++;
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
        buzz++;
    }
    else {
        //console.log("Number is not divisible by 3 or 5--> " + i);
        numbernotdivisible.push(i);
        notdivisible++;
    }
}

console.log("Number of times Fizz is printed: " + fizz);
console.log("Number of times Buzz is printed: " + buzz);
console.log("Number of times FizzBuzz is printed: " + fizzbuzz);
console.log("Number of times not divisible by 3 or 5 is printed: " + notdivisible);
console.log("Numbers not divisible by 3 or 5: " + numbernotdivisible);