let namebox = document.getElementById("nameInput");
let agebox = document.getElementById("ageInput");
let colorbox = document.getElementById("colorInput");
let petbox = document.querySelectorAll("input[type='radio']");
let gamebox = document.querySelectorAll("input[type='checkbox']");
let subtn = document.getElementById("submitBtn");
let profile = document.getElementById("output");
console.log(gamebox);
console.log(petbox);

subtn.addEventListener('click', yourname);

function yourname() {
   console.log(namebox.value);
   console.log(agebox.value);
}

// let askname = prompt("What is your name?", "Your name here...");

// namebox.innerHTML = askname; 
// console.log("Hello, " + namebox + "!");

//let t = namebox.innerHTML += "this";
//console.log(t);