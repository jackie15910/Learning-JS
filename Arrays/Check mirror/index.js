var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) { //this loop stores proper closing brackets
        if (s[i] == '{') {
            stack.push('}');
        } else if (s[i] == '[') {
            stack.push(']');
        } else if (s[i] == '(') {
            stack.push(')');
        }
        else if (stack.pop() !== s[i]) { //will remove the last stored closing bracket and then compares to the string element
            return false;
        }
    }
    return !stack.length; //checks if stack is cleared, meaning all brackets are closed and mirrored
};

console.log(isValid("()"))
// Output: true
console.log(isValid("()[]{}"))
// Output: true
console.log(isValid("(]"))
// Output: false
console.log(isValid("([])"))
// Output: true