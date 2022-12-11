const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");
let passwordLenghtEl = document.getElementById("password-lenght-el");

function generatePassword() {
    passwordOneEl.value = "";
    passwordTwoEl.value = "";
    
    for (let i = 0; i < passwordLenghtEl.value; i++) {
    let randomSighnOne = characters[Math.floor(Math.random(characters.length) * characters.length)];
    let randomSighnTwo = characters[Math.floor(Math.random(characters.length) * characters.length)];
   
    passwordOneEl.value += randomSighnOne;
    passwordTwoEl.value += randomSighnTwo;
    
    }
     
}

function copyPassword() {
  
  let copyText = document.getElementById("password-one-el");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Your password: " + copyText.value + " is copy");
}





