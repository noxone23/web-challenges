// Step 1: Create a `string[]` called `hobbies` with at least three entries.
const hobbies: string[] = ["Sport", "Movies", "Design"]
console.log(hobbies);
// Step 2: Create a `number[]` called `grades`. Add another grade with `push`.
const grades: number[] = [1, 3, 2];
grades.push(6);
console.log(grades);
// Step 3: Try to push a string into `grades`. Read the error message, then remove the line again.
//grades.push("six");
// Step 4: Create an object `student` with the typed properties
// `name: string`, `age: number`, `isStudent: boolean` and `grades: number[]`.
const student: {
    name: string; 
    age: number; 
    isSTudent: boolean; 
    grades: number[];
} = {
name: "Ben",
age: 23,
isSTudent: true,
grades: [1, 2, 3]
};
console.log(student)
// Step 5: Print the `name` and the `grades` of `student`.
console.log(student.name)
console.log(student.grades)
// Step 6: Create an array `students` that holds at least two such student objects.
// How would you type it? Which part is annoying to write twice?
const students: { name: string; age: number; isSTudent: boolean; grades: number[] }[] = [
  {
    name: "Ben",
    age: 23,
    isSTudent: true,
    grades: [1, 2, 3]
  },
  {
    name: "Maggie",
    age: 21,
    isSTudent: true,
    grades: [3, 2, 1]
  }
];
console.log(students);