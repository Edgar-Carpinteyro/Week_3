// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
/* Programmatically subtract the value of the first element in the array from the value in the last element of the array 
(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
Print the result to the console.*/

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length -1] - ages[0]);

/*Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age. Print the result to the console.*/
console.log(ages.push(43));
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);

let total = 0
for (let i = 0; i < ages.length; i++) {
    const age = ages[i]
    total = (total + age)
}
console.log(total / ages.length)

//#2 Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

console.log(names);

//Use a loop to iterate through the array and calculate the average number of letters per name.Print the result to the console.

let x = 0;

for (let i = 0; i < names.length; i++) {
    x = x + names[i].length    //23 letter in total
}
console.log(x / names.length);    //23 is divided by 6 (# of words)

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for (let i = 0; i < names.length; i++) {
    console.log(names.join(" "));    //add space in between the quotes to create space between words
}

// #3 How do you access the last element of any array ?
let arr1 = [1, 2, 3, 4];
let lastElement = arr1[arr1.length - 1];

console.log(lastElement);

//#4 How do you access the first element of any array ?
let firstElement = arr1[0];

console.log(firstElement);

/* #5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */

let namesArray = ["Kelly", "Sam", "Kate"]; 
let nameLengths = [5, 3, 4];

for (let i = 0; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);


// #6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.Print the result to the console.
let z = 0

for (let i = 0; i < nameLengths.length; i++) {
    z += nameLengths[i];
}
console.log(z);

// #7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e.if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function ccc(word, n) {
    let x = "";
    for (let i = 0; i < n; i++) {
        x += word
    } return x;
}
console.log(ccc("Hello ", 3));

// #8 Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
} 
console.log(fullName("Edgar", "Carpinteyro"));

// #9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arrNum = [100, 23, 45]

function arrIsGreater(arrNum) {
    let sum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sum = sum + arrNum[i];
    } if (sum > 100) {
            return true;
        } else {
            return false;
        }
    };
console.log(arrIsGreater(arrNum));

//#10 Write a function that takes an array of numbers and returns the average of all the elements in the array.
let arrNum2 = [10, 20, 30, 40]

function aveEle(z) {
    let m = 0
    for (let i = 0; i < z.length; i++) {
        m = m + z[i]
    } return m / (z.length);
}
console.log(aveEle(arrNum2));

//#11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let ar1 = [9, 8, 7, 6]
let ar2 = [5, 10, 4, 3]

function arGreater() {
    let add1 = ar1.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    let add2 = ar2.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    if (add1 > add2) {
        return true;
    } else {
        return false;
    }
};
console.log(arGreater())

//#12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
};

console.log(willBuyDrink(true, 15.75))

// #13 Create a function of your own that solves a problem.In comments, write what the function does and why you created it.

/* PROBLEM: Create a function called willGoBachataDancing to determine if you have time to go dancing on Wednesdays. If completedHomework is completed, timeOfDay is less than 9pm, and wellRested is yes, return true; else return false. If true, return the following message in a string: "Yay, I will go bachata dancing! :)"; if false: "I can go bachata dancing next week."
*/


function willGoBachataDancing(completedHomework, timeOfDay, wellRested) {
    if ((completedHomework == "completed") && (timeOfDay < 9) && (wellRested == "yes")) {
        return "Yay, I will go bachata dancing! :)";
    } else {
        return "I can go bachata dancing next week.";
    }
};

console.log(willGoBachataDancing("completed", 8, "yes"));
