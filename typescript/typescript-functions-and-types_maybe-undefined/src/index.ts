// Step 1: Write a function `printScore` that takes a `score` of the type `number | undefined`
// (a number or `undefined`) and prints it with one decimal place, for example "Score: 87.5".
// Use `score.toFixed(1)` for the decimal place. Don't call the function yet.
// Read the error message. What could go wrong at runtime if TypeScript didn't warn you?

/*function printScore(score: number | undefined): void {
    console.log("Score" + score.toFixed(1));
}*/

// Step 2: Fix the error with an `if` check:
// If the score is `undefined`, print "Score: n/a". Otherwise, print the score with one decimal place.
// Hover over `score` inside the `if` branch and inside the `else` branch. Which type does it have in each?
//undefined and number
function printScore(score: number | undefined): void {
    if (score === undefined) {
        console.log("Score: n/a");
    } else {
        console.log("Score: " + score.toFixed(1));
    }
}

// Step 3: Call `printScore` with 87.5 and with `undefined`.
// Then try to call it with the string "high". Read the error message and remove the line again.

printScore(87.5);
printScore(undefined);
//printScore("high"); typ string kann bei typ number nicht angewendet werden

// Step 4: Write a function `describeStudent` that takes a `name` (string) and an optional `age` (number).
// It returns "Max (17)" if there is an age, and just "Max" if there is none.
// Hint: Search for "TypeScript optional parameter" to find out how to mark a parameter as optional.
// a) Hover over `age` in the first line of the function body: Which type does it have?
// b) Call `describeStudent` with and without an age. Answer: Number and undefined
//    What happens if you call it without any arguments? Read the error message and remove the line again. Answer 1-2 Argumente werden erwartet,
//  empfangen wurden aber 0

function describeStudent(name: string, age?: number): string {
if (age) {
    return `${name} (${age})`;
} else {
    return name;
}
}
 describeStudent();

// Step 5: Create an array `scores` with the values 80, 95, `undefined` and 60.
// a) Hover over `scores`: Which type does TypeScript infer by itself? Answer: number and undefined
// b) Print every score with `printScore`, using a loop. Answer: forEach

const scores = [80, 95, undefined, 60];

scores.forEach(score => {
printScore(score);
});

// Question: What does `number | undefined` tell you when you read the signature of `printScore`?
// Why is the error message from step 1 helpful, even though it feels annoying?
// Answer:
