let namebox = document.getElementById("nameInput");
let agebox = document.getElementById("ageInput");
let colorbox = document.getElementById("colorInput");
let petbox = document.querySelectorAll("input[type='radio']");
let gamebox = document.querySelectorAll("input[type='checkbox']");
let subtn = document.getElementById("submitBtn");
let profile = document.getElementById("output");
let favPet;
let favHobby = [];
console.log(gamebox);
console.log(petbox);

subtn.addEventListener('click', yourname);

function yourname() {
   // console.log(namebox.value);
   // console.log(agebox.value);
   // // console.log(petbox);
   // // console.log(gamebox);
   favHobby = [];
for(let i = 0; i < gamebox.length; i++){
   if(gamebox[i].checked){
      favHobby.push(" " + gamebox[i].value);
   }
}
console.log(favHobby);
   for(let i = 0; i < petbox.length; i++){
      if(petbox[i].checked){
         favPet = petbox[i].value;
      }
   }
   var picked = colorbox.options[colorbox.selectedIndex].text;

   document.getElementById("output").innerHTML = "Hello, my name is " + namebox.value + " and I am " + agebox.value + " years old. My favorite color is " + picked + ". My favorite pet is a " + favPet + ", and I enjoy " + favHobby + ".";
}

//  array = [];
// var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

// for(var i = 0; i < checkboxes.length; i++)
