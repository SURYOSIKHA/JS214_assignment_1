//combining array
function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables];
    return groceries;
}
// Example invocation:
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables));
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

console.log("------------------------------------------------------------")
//cloning array
//Example Invocation:
function cloningObjects(person){
    const p={...person}
    return p
}
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }

console.log("------------------------------------------------------------")

//merging objects

//Example Invocation:

function mergingObjects(student,course){
    const det={...student,...course}
    return det
}
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student,course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

console.log("------------------------------------------------------------")
//combining nested arrays
//Example Invocation:

function combiningNestedArrays(array1,array2){
    const com=[...array1,...array2]
    return com
}
const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  console.log(combiningNestedArrays(array1,array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
  
