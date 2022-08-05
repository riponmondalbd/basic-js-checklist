// 1. conversation 
function feetToInch(feet){
    let inch = 12 * feet;
    return inch;
}
let result = feetToInch(3);
console.log('The feet to inch is', result);


//2. conversation
function centimeterToMeter(centimeter) {
    let meter = 0.01 * centimeter;
    return meter;
}
let meterResult = centimeterToMeter(200);
console.log('The Centimeter to Meter is', meterResult);


//3.calculation
//book1 has 100 pages
//book2 has 200 pages
//book3 has 300 pages
function pageRequirements(book1, book2, book3) {
    let book1Pages = book1 * 100;
    let book2Pages = book2 * 200;
    let book3Pages = book3 * 300;

    let totalPages = book1Pages + book2Pages + book3Pages;
    return totalPages;
}
let pages = pageRequirements(3, 2, 3);
console.log('Total pages of books', pages);


//4. friends (return lagest name)
function bestFriend(names) {
    let largest = "";
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.length > largest.length) {
            largest = name;
        }
    }
    return largest;
}
console.log(bestFriend(['abud','sabera','foyssall','abida aktar munni','nafiza khan umma habiba']))

// //5. will stop the loop if the array has any negative number and return all the positive number before the negative number
function onlyPositive(nums) {
    let numbers = [];
    for (var i = 0; i < nums.length; i++){
        number = nums[i];
        if (number < 0) {
            break;
        } else {
            numbers.push(number);
        }
    }
    return numbers;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 43, -1, 45, 2, 3, 4, 6, 7, 3];
console.log(onlyPositive(numbers));
