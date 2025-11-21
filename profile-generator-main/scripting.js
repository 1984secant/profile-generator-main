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
    var picked = colorbox.options[colorbox.selectedIndex].text;
   document.getElementById("output").innerHTML = "Hello, my name is " + namebox.value + " and I am " + agebox.value + " years old. My favorite color is " + picked + ".";
}
