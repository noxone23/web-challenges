// Step 1: Write a function `greet` with the `function` keyword.
// It takes a `name` (string) and returns a greeting (string), for example "Hello, Anna!".
// Type the parameter and the return value. Call the function and log the result.
function greet(name: string): string {
    return `Hello, ${name}!`;
}
const greeting: string = greet("Anna");
console.log(greeting);

// Step 2: Write a function `isAdult` that takes an `age` (number) and returns a boolean:
// `true` if the age is 18 or more. Type the parameter and the return value.
// Call it with 17 and with 18 and log both results.
function isAdult(age: number, ): boolean {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
} 
console.log(isAdult(17));
console.log(isAdult(18));

// Step 3: Write a function `printFullName` that takes a `firstName` and a `lastName` (both strings)
// and prints them to the console, for example "Anna Meier". The function doesn't return anything.
// Type both parameters. Which return type do you have to write? Hover over the function name to check.
function printFullName(firstName: String, lastName: string): void {
    console.log(`${firstName} ${lastName}`);
}
printFullName("Horst", "Schlemmer");

// Step 4: Write a function `double` as an arrow function and store it in a constant.
// It takes a number and returns it multiplied by two.
// Type the parameter and the return value. Call it and log the result.
const double =(number: number): number => {
    return number * 2;
}
console.log(double(50));

// Step 5: Break it on purpose. Try each of the following one after the other.
// Read every error message completely and undo the change afterwards.
// a) Call `double("5")`.
// b) Call `printFullName("Anna")`.
// c) Call `greet("Anna", "Ben")`.
// d) Change `greet` so that it returns the number 42 instead of a string.
/*const double =(number: number): number => {
    return number * 2;
}
console.log(double(5));

function printFullName(firstName: String, lastName: string): void {
    console.log(`${firstName} ${lastName}`);
}
printFullName("Anna");

function greet(name: string): string {
    return `Hello, ${name}!`;
}
const greeting: string = greet("Anna", "Ben");
console.log(greeting);

function greet(number: number): number {
    return `42;`;
}
const greeting: string = greet(42);
console.log(greeting);*/
// Step 6: TypeScript can guess some types on its own.
// a) Remove the return type from `isAdult`. Hover over the function name: Which return type does TypeScript infer?
// b) Put the return type back. Now remove the type from the parameter `age`. What does TypeScript say?
// c) Put the parameter type back.
//
// Question: Which types does TypeScript guess for you, and which types do you always have to write yourself?

// Answer: 1.he guesses Variables with a value (const age = 18) and return functions based on the keyword.
// Answer: 2.funtion parameters like function isAdult(age: number), variables without a value (let result: boolean;)

/*function isAdult(age: number) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}*/
/*function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}*/
/*function isAdult(age: number): boolean {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}*/