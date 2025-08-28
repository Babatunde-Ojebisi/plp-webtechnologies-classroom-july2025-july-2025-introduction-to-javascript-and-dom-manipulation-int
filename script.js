// Part 1: Variables & Conditionals
let userName = "Brainbox";
let userAge = 20;
let isStudent = true;

// Conditional example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Part 2: Functions

// Function 1: Greet the user
function greetUser() {
  alert("Hello, " + userName + "! Welcome to the project.");
}

// Function 2: Add an item to the list
function addItem() {
  let itemList = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (itemList.children.length + 1);
  itemList.appendChild(newItem);
}

// Part 3: Loops

// For loop e
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("While loop count: " + count);
  count++;
}


// Part 4: DOM Interactions

// Interaction 1: Change text content
document.getElementById("title").textContent = "JS Assignment in Action";

// Interaction 2: Change style
function toggleColor() {
  let title = document.getElementById("title");
  if (title.style.color === "red") {
    title.style.color = "darkblue";
  } else {
    title.style.color = "red";
  }
}

// Interaction 3: Display a message in the <p> tag
function showMessage() {
    let message = document.getElementById("message");
    message.textContent = "You only live ones!";
  }