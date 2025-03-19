import { useState } from "react";

export function useCalculator() {
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [outputColor, setOutputColor] = useState<string>("gray");


    function getNumbers(): [number, number] {
        return [Number(firstNumber), Number(secondNumber)];
    }

    function updateOutput(result: number | string): void {
        setOutput("Result: " + result);
        if (typeof result === 'number' && result < 0) {
            setOutputColor("red");
        } else {
            setOutputColor("darkslategray");
        }
    }

    function addition() {
        const [first, second] = getNumbers();
        updateOutput(first + second);
}

    function subtraction() {
        const [first, second] = getNumbers();
        updateOutput(first - second);
    }

    function multiplication() {
        const [first, second] = getNumbers();
        updateOutput(first * second);
    }

    function division() {
        const [first, second] = getNumbers();
        if (second === 0) {
            updateOutput("Error: Cannot divide by zero");
            return;
        }
        updateOutput(first / second);
    }

    function power() {
        const [base, exponent] = getNumbers();
        let result = 1;

        for (let i = 0; i < exponent; i++) {
            result *= base;
        }

        updateOutput(result);
    }
    function clearFields() {
        setFirstNumber("");
        setSecondNumber("");
        setOutput("");
        setOutputColor("gray");
    }

    return {
        firstNumber,
        secondNumber,
        output,
        outputColor,
        setFirstNumber,
        setSecondNumber,
        addition,
        subtraction,
        multiplication,
        division,
        power,
        clearFields
    };
}