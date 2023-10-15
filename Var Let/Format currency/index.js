let myNum = 123456.789;

/* myNum = myNum.toLocaleString("en-US"); */

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});

console.log(myNum);

/* let myNum = 0.1;

myNum = myNum.toLocaleString(undefined, {style: "percent"});

console.log(myNum); */