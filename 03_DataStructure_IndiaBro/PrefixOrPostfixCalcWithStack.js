/*
 * @Descripttion: 
 */
// evaluate prefix, say 2*3+8/4-9 -> "- + * 2 3 / 8 4 9" 
var evaluatePrefix = function(exp){
    var expList = exp.split(' ');
    var operators = "*/+-";
    var stack = [];
    if (!expList || !expList.length) return "error exp";
    for(var index = expList.length - 1; index >= 0; index--){
        if(operators.includes(expList[index])){
            var oprand1 = stack.pop();
            var oprand2 = stack.pop();
            var result = evaluate(oprand1, oprand2, expList[index]);
            stack.push(result);
        }else{
            stack.push(expList[index]);
        }
    }
    return stack.pop();
}

// evaluate postfix, say 2*3+8/4-9 -> "2 3 * 8 4 / + 9 -"
var evaluatePostfix = function(exp){
    var expList = exp.split(" ");
    var operators = "*/+-";
    var stack = [];
    if(!expList || !expList.length) return "error exp";
    for(var index = 0; index < expList.length; index++){
        if(operators.includes(expList[index])){
            var oprand2 = stack.pop();
            var oprand1 = stack.pop();
            var result = evaluate(oprand1, oprand2, expList[index]);
            stack.push(result);
        }else{
            stack.push(expList[index]);
        }
    }
    return stack.pop();

}

var evaluate = function(oprand1, oprand2, operator){
    switch(operator){
        case "+":
            return oprand1 + oprand2;
        case "-":
            return oprand1 - oprand2;
        case "*":
            return oprand1 * oprand2;
        case "/":
            return oprand1 / oprand2;
    }
}

console.log(evaluatePostfix("2 3 * 8 4 / + 9 -"));
console.log(evaluatePostfix("5 5 3 - * 6 6 4 - / +"));
console.log(evaluatePrefix("- + * 2 3 / 8 4 9" ));
console.log(evaluatePrefix("+ * 5 - 5 3 / 6 - 6 4"));