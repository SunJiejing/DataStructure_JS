/*
 * @Descripttion: 
 */

// infix to postfix, say 2*3+8/(5-1) -> "2 3 * 8 5 1 - / +"
var operators = {'+': 1, '-':1, '*':2, '/':2};
var infix2Postfix = function(exp){
    var expList = exp.split('');
    if(!expList || !expList.length ) return "null express";
    var parethese = {'(':')', '[':']', '{':'}'};
    
    var operatorsStack = [];
    var result = "";
    var current = '';
    for(let index = 0; index < expList.length; index++){
        current = expList[index];
        if(isOpenParethese(parethese, current)){
            operatorsStack.push(current);
        }else if(isCloseParethese(parethese, current)){
            while(parethese[operatorsStack[operatorsStack.length - 1]] !== current){
                result += operatorsStack.pop() + " ";
            }
            operatorsStack.pop();
        }else if(Object.keys(operators).includes(current)){
            while(operatorsStack.length && topStackIsHigher(operatorsStack[operatorsStack.length - 1], current)){

                result += operatorsStack.pop() + " ";
            }
            operatorsStack.push(current);
        }else{
            result += current + " ";
        }
    }
    while(operatorsStack.length){
        result += operatorsStack.pop() + " ";
    }
    return result;

    
}

// too function for infix2Postfix
function isCloseParethese(parethese, current) {
    return Object.values(parethese).includes(current);
}

function isOpenParethese(parenthese, current) {
    return Object.keys(parenthese).includes(current);
}
function topStackIsHigher(topStack, operator){
    if(operators[topStack] >= operators[operator]) return true;
    return false;
}

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

// console.log(evaluatePostfix("2 3 * 8 4 / + 9 -"));
// console.log(evaluatePostfix("5 5 3 - * 6 6 4 - / +"));
// console.log(evaluatePrefix("- + * 2 3 / 8 4 9" ));
// console.log(evaluatePrefix("+ * 5 - 5 3 / 6 - 6 4"));
console.log(infix2Postfix('1+2'));
console.log(infix2Postfix('1+2+(2*3+1)'));
console.log(infix2Postfix('2*3+8/(5-1)'));
console.log(infix2Postfix('2*3+(3+8/(5-1))'));

