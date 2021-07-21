const helloInConsole = "Hello";
const someNumber = 123;

console.log("hello");
console.log(helloInConsole);
console.log(someNumber);

console.log(
  `Cześć to po angielsku ${helloInConsole}, a to jest jakas liczba - ${someNumber} :)`
);

const mainTitle = document.querySelector('.main__title--js');

console.log(mainTitle);

mainTitle.innerHTML = `Cześć to po angielsku ${helloInConsole}, a to jest jakas liczba - ${someNumber} :)`;

