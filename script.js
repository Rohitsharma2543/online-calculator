const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let inputValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.innerText;
        if (buttonValue === "AC") {
            inputValue = ""; 
        } else if (buttonValue === "DEL") {
            inputValue = inputValue.slice(0, -1);
        } else if (buttonValue === "=") {
            try {
                inputValue = eval(inputValue).toString();
            } catch (error) {
                inputValue = "Error";
            }
        } else {
            inputValue += buttonValue;
        }

        inputBox.value = inputValue;
    });
});