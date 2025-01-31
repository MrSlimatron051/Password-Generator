const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOneEl = document.getElementById("password1");
let passTwoEl = document.getElementById("password2");
let passwordLengthInput = document.getElementById("passwordLength");

function getPassword() {
    let passOne = "";
    let passTwo = "";

    // Get the value of the input field
    let passwordLength = parseInt(passwordLengthInput.value);

    // Validate the input value
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 32) {
        alert("Please enter a valid password length between 8 and 32.");
        return;
    }

    // Generate passwords
    for (let i = 0; i < passwordLength; i++) {
        passOne += characters[Math.floor(Math.random() * characters.length)];
        passTwo += characters[Math.floor(Math.random() * characters.length)];
    }

    // Display passwords
    passOneEl.querySelector(".password-text").textContent = passOne;
    passTwoEl.querySelector(".password-text").textContent = passTwo;
}

// Add copy-on-click functionality
function copyToClipboard(element) {
    const textToCopy = element.querySelector(".password-text").textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Provide visual feedback
            element.classList.add("copied");
            setTimeout(() => {
                element.classList.remove("copied");
            }, 1000); // Remove the feedback after 1 second
        })
        .catch((err) => {
            console.error("Failed to copy text: ", err);
        });
}

// Add event listeners to password divs
passOneEl.addEventListener("click", () => copyToClipboard(passOneEl));
passTwoEl.addEventListener("click", () => copyToClipboard(passTwoEl));