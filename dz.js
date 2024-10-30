//1
const result = 5 + 5 + '5';
console.log(result);          // Виведе: "105"
console.log(typeof result);    // Виведе: "string"

//2
let email = "n.kniazev2007@gmail.com";
if (email.includes('@')) {
    console.log("Символ '@' присутній в email.");
}
console.log("Кількість символів в email:", email.length);

// 3
let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = `${word1} ${word2} ${word3} Nikita`;
console.log(fullName);   

// 4
let userName = "Олександр";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
