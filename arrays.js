// "map" method.  "forEach" vs "map"
const nums = [1, 2, 3, 4];
function duplicate(arr) {
  const duplicatedArr = [];
  arr.forEach(function (num) {
    duplicatedArr.push(num * 2);
  });
  return duplicatedArr;
}

function duplicateWithMap(arr) {
  return arr.map((num) => {
    return num * 2;
  });
}

console.log(duplicate(nums));
console.log(duplicateWithMap(nums));

const students = [
  { name: "Pepe", grade: 8 },
  { name: "Jon", grade: 7.5 },
];

const grades = students.map((student, index) => {
  return student.grade;
});

console.log(grades);

// "reduce" method
const sumNumbers = [1, 2, 3, 4, 5];

const sum = sumNumbers.reduce((acc, element) => {
  return acc + element;
});

console.log(sum);

const chars = ["This", "is", "a", "nice", "string"];

const s = chars.reduce((acc, element) => {
  return acc + element;
}, "");

const myString = "This is my string";

console.log(myString.split(" "));
console.log(myString.split(" ").join(" "));

// "filter" method
const numsToFilter = [1, 2, 3, 4, 5];

const filteredNums = numsToFilter.filter((element, index) => {
  const isGreaterThan = element > 2;
  if (isGreaterThan) {
    console.log(`Element ${element} is greater than 2`);
  } else {
    console.log(`Element ${element} is not greater than 2`);
  }
  return index > 3 && isGreaterThan;
});

console.log(filteredNums);
