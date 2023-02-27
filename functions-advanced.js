// Function declaration vs expression
function sayHello() {
  console.log("Hello!!");
}

// Callbacks
[1, 2, 3].forEach(function (element, index) {});

// Asynchronous functions
setTimeout(sayHello, 3000);

setInterval(sayHello, 1000); // Ctr + C to stop using `node FILE_NAME`

// Promise class

console.log("1");
setTimeout(function () {
  console.log("2");
}, 2000);
console.log("3");
console.log("4");

// Arrow functions
const manyParams = (element, index) => {};
const oneParam = (element) => {};
const noParams = () => {};

// "arguments" object
const showArguments = () => {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  for (let key in arguments) {
    console.log(`for in key: ${key}`);
    console.log(`for in value: ${arguments[key]}`);
  }
};

showArguments("one", "two", "three", "four", "five");
