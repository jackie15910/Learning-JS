let numbers = [1,2,3,4,5,6,7,8,9];

/* let maximum = Math.max(numbers); //this doesn't work because its not unpacked
console.log(maximum); */

let maximum = Math.max(...numbers); //this works because its now unpacked and taking individual values
console.log(maximum);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 =["squidward", "Mr.Krabs", "Plankton"];

/* class1.push(class2); //this "pushes" the entire array as an element
console.log(class1); */

class1.push(...class2); //this divides class 2 in the final
console.log(...class1); //this divides class 1 but ignores class 2