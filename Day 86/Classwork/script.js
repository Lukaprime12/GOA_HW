function calculator(x , y , operator) {
    switch(operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
    }
}

console.log(calculator(10 , 5 , '+'));