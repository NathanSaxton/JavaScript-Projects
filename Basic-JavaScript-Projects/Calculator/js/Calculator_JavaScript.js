const Calculator = { //object meant to keep track of values
    Display_Value: '0', //starting value
    First_Operand: null,
    Wait_second_Operand: false,
    operator: null
};

function Input_Digit(digit) { //changes values evertime a button is pressed.
    const { Display_Value, Wait_second_Operand } = Calculator;

    if (Wait_second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_second_Operand = false;
    } else {//overwrites if the display value is 0 or adds to it if not. 
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //function to add a decimal without adding multiple decimals to a number
    if (Calculator.Wait_second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { //manages the operators 
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value); //converts the current number displayed to a number and stores it
    if (operator && Calculator.Wait_second_Operand) { //checks if there's an operator and a second number then exits the function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9); //removes any trialing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // updates the screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {//manages button clicks
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { //ensures that AC clears everything from the calculator
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})