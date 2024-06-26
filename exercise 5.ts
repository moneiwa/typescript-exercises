

//add
class Calculator {
    
    add(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        return a + b;
    }

    // Sub
    subtract(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        return a - b;
    }

    // Mult
    multiply(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        return a * b;
    }

    // div
    divide(a: number, b: number): number {
        this.validateNumber(a);
        this.validateNumber(b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    // P
    private validateNumber(value: any): void {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error("Invalid input: input must be a valid number");
        }
    }
}

const calculator = new Calculator();

try {
    console.log("Addition: ", calculator.add(10, 5));
    console.log("Subtraction: ", calculator.subtract(10, 5)); 
    console.log("Multiplication: ", calculator.multiply(10, 5)); 
    console.log("Division: ", calculator.divide(10, 5)); 
    console.log("Division by zero: ", calculator.divide(10, 0)); 
} catch (error) {
    console.error(error.message);
}
