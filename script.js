let inputone = document.querySelector("#num1");
let inputtwo = document.querySelector("#num2");
let addbtn = document.querySelector("rgb(204, 178, 32)-btn");
let subbtn = document.querySelector("#sub-btn");
let resultheading = document.querySelector("#calc-result");

    addbtn.addEventListener("click", function() {

        let value1 = Number(inputone.value);
        let value2 = Number(inputtwo.value);
        let sum = value1 + value2;
        resultheading.innerText = "Result: " + sum;
    });

    subbtn.addEventListener("click", function() {
        let value1 = Number(inputone.value);
        let value2 = Number(inputtwo.value);
        let difference = value1 - value2;
        resultheading.innerText = "Result: " + difference;
    });
