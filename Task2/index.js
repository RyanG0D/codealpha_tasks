let expression = "";

const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

function updateDisplay(){

    expressionDisplay.textContent = expression;

    if(expression===""){
        resultDisplay.textContent="0";
        return;
    }

    try{

        let result = eval(expression);

        if(result!==undefined){
            resultDisplay.textContent=result;
        }

    }catch{
        resultDisplay.textContent="";
    }

}

function appendValue(value){

    expression += value;
    updateDisplay();

}

function clearDisplay(){

    expression="";
    updateDisplay();

}

function backspace(){

    expression = expression.slice(0,-1);
    updateDisplay();

}

function calculate(){

    try{

        expression = eval(expression).toString();
        updateDisplay();

    }catch{

        resultDisplay.textContent="Error";

    }

}

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if((key>='0' && key<='9') ||
       key==='+' ||
       key==='-' ||
       key==='*' ||
       key==='/' ||
       key==='.'){

        appendValue(key);

    }

    else if(key==="Enter"){

        event.preventDefault();
        calculate();

    }

    else if(key==="Backspace"){

        backspace();

    }

    else if(key==="Escape"){

        clearDisplay();

    }

});
