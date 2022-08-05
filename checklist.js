/* Hello Java Script */

// 1.Write variables
var bananaPrice = 12;
var bananaColor = "light orange";
var isHot = true;

// 2. variables (let, const)
// let changable but const not changable

// using Let 
let mobilePrice = 2500;
mobilePrice = 5550;
// console.log(mobilePrice);

// using const 
const myCountryName = 'Bangladesh';

// 3. Simple math operations (+, -, *, /, %)

let num1 = 23;
let num2 = 11;

let add = num1 + num2;
// console.log('The result of Add', add);
let sub = num1 - num2;
// console.log('The result of Sub', sub);
let mul = num1 * num2;
// console.log('The result of Mul', mul);
let div = num1 / num2;
// console.log('The result of Div', div);
let remainder = num1 % num2;
// console.log('The result of Remainder', remainder);

// 4.Comparison

var a = 5;
var b = 6;

/* console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b); */

/* 5.two condition case -1 : fulfill both conditions
case-2: fulfill at list one condition */

// case -1

var taka = 2000;
var job = true;

// console.log(taka > 500 && job == true)
// console.log(taka > 500 || job == true)


// 6. if else 

var taka = 2000;
var job = true;
if (taka > 500 && job == true) {
    // console.log('Mea dakbo naki!');
} else {
    // console.log('Ke r hba mea daka khoabe ke?');
}

if (taka > 5000 || job == true) {
    // console.log('Mea dakbo naki!');
} else {
    // console.log('Ke r hba mea daka khoabe ke?');
}

// 7.While loop to display 7 to 19 all numbers .only display odd numbers including 7 to 19

var number = 7;
while (number <= 19) {
    // console.log(number);
    number++;
}
// Odd Number 
var i = 7;
while (i <= 19) {
    // console.log(i);
    i = i + 1;
    i++;
}

/* 8. declear an array. Number of elements . 4th position element update and ChannelMergerNode. add or remove element . check weather specific value exists in the array  */

var names = ['ripon', 'korim', 'rohim', 'samad', 'sala', 'abu', 'jelane', 'foysal', 'koushik'];
// console.log(names);
names.push("rohan");
// console.log(names);
names.pop();
// console.log(names);
// console.log(names.indexOf('koushik'));
names[4] = 'sabera';
// console.log(names);

// 9. use any fir loop to display every elements of an array 
var names = ['ripon', 'korim', 'rohim', 'samad', 'sala', 'abu', 'jelane', 'foysal', 'koushik'];

for (i = 0; i < names.length; i++){
    var element = names[i];
    // console.log(element);
}

// 10. you have an array of numbers. Display only the munbers bigger than 80
var numbers = [12, 34, 56, 78, 98, 76, 47, 93, 68, 34, 67, 600, 25, 67];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number < 80) {
        continue;
    }
    // console.log(number);
}


//11. write a function that takes three numbers and return multiplications of the three numbers
function multiplications(num1, num2, num3) {
    sum = num1 * num2 * num3;
    return sum;
}
var result = multiplications(2, 3, 5);
// console.log(result);

// 12. declear an object and change any property of that object

var mobile = {
    color: 'red',
    price: 1200,
    display: 5.6,
    charger: 'yes'
};
mobile.price = 2500;
console.log(mobile);