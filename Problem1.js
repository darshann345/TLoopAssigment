
class Calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase();
    }

    calculate() {
        switch (this.operation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                return this.b !== 0 ? this.a / this.b : 'Error: Division by zero';
            default:
                return 'Error: Invalid operation';
        }
    }
}

const calc = new Calculator(10.5, 2.5, 'add');
console.log(calc.calculate()); 
