// 1. განსხვავება let, const და var-ს შორის
// const PI = 3.14;
// var number = 5;
// var number = 10;
// console.log(number);

// let number = 5;
// let number = 5; -> გამოიტანს ერორს

// 2. დაწერეთ პროგრამა რიცხვის ერთით გასაზრდელად
// let number = 5;
// number++;
// console.log(number);

// 3. დაწერეთ პროგრამა რიცხვის ერთით შესამცირებლად
// let number = 6;
// number = number - 2;
// console.log(number);

// 4. დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს მის სახელს და გამოაკონსოლებს მაგალითად: "გამარჯობა, თემო"

// let name =  prompt("What is your name? ");
// console.log(`გამარჯობა, ${name}`);

// 5. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება ამჟამინდელ წელსა და მის დაბადების წელს და გამოითვლის ასაკს.
// let currentYear = Number(prompt("Enter current year: "));
// let birthYear = Number(prompt("Enter your birth year: "));
// let age = currentYear + birthYear;
// console.log(age);

// 6. დაწერეთ პროგრამა, რომელიც მოაშორებს ცარიელ სივრცეებს (სფეისებს) სტრინგის თავსა და ბოლოში.
// let email = "        temuri.tsutskirdze.1@gmail.com           ";
// let newEmail = email.trim();
// console.log("-" + newEmail + '-');

// 7. დაწერეთ პროგრამა, რომელიც მოაშორებს ცარიელ სივრცეებს (სფეისებს) სტრინგის თავში.
// let email = "        temuri.tsutskirdze.1@gmail.com           ";
// let newEmail = email.trimStart();
// console.log("-" + newEmail + '-');

// 8. დაწერეთ პროგრამა, რომელიც მოაშორებს ცარიელ სივრცეებს (სფეისებს) სტრინგის ბოლოში.
// let email = "        temuri.tsutskirdze.1@gmail.com           ";
// let newEmail = email.trimEnd();
// console.log("-" + newEmail + '-');
