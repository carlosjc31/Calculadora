function calc(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) && !isNaN(num2)) {
    const output = document.getElementById("output");
    output.textContent = num1 + num2;
    }
    else{
        output.textContent = "Entrada inválida";
    }  

    switch(op)
    {
        case "+": output = num1 + num2; break;
        case "-": output = num1 - num2; break;
        case "*": output = num1 * num2; break;
        case "/": output = num1 / num2; break;
    }

    document.getElementById("output").value = output;
}