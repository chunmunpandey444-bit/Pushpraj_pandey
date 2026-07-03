function calculate(operator) {
    // 1. Dono input boxes se numbers ko lekar aana
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;

    // 2. Agar dono me se koi bhi box khali hai toh warning dena
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers(dono columns me)!");
        return;
    }

    // 3. Operator ke mutabik calculation karna
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        result = num1 / num2;
    }

    // 4. Result ko screen par display karna
    document.getElementById('result').innerText = result;
}
