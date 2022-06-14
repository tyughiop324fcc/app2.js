//операторы
const a = 5;
const b = 2;
let c = 10;
console.log(c +=a);
console.log(c -=b);
console.log(c *=a);
console.log(c /=b);

//типы данных
const isProgrammer = true;
const name = "Feodor";
const age = 47;
let x;
console.log( typeof isProgrammer);
console.log(typeof age);
console.log(typeof x);
console.log(typeof true);
console.log(typeof 47);
console.log(typeof null);

//приоритет операторов
const fullAge = 47;
const birthYear = 1975;
const currentYear = 2022 

const isFullAge = currentYear - birthYear >= fullAge;
const age32 = currentYear - birthYear;

console.log(isFullAge);
console.log(age32);

const ko = 22;
const ok = "22";
console.log(ko == ok);
console.log(ko === ok);

const courseStatus = "ready";// ready, fail, pending
if (courseStatus === "ready") {
    console.log("Задание выполнено")
} else if (courseStatus === pending) {
    console.log("Задание в процессе разработки")    
} else {
    console.log("Задание провалено")
};

const isReady = true;

if (isReady) {
    console.log("Всё готово")
} else {
    console.log("Всё не готово")
};

//Функции
function calculateAge(year) {
    return 2022 - year
};

const myAge = calculateAge(1975);
console.log(myAge);
console.log(calculateAge(2005));
console.log(calculateAge(2010));
console.log(calculateAge(2019));


function logInfoAbout(name, year) {
    const age3 = calculateAge(year)
    console.log("Человек по имени " + name + " имеет возраст " + age3)
};

logInfoAbout("Феодор", 1975);


function logInfoAbout(name, year) 
{
    const age3 = calculateAge(year)
    if (age3 > 0) {
        console.log("Человек по имени " + name + " имеет возраст " + age3)
    } else {
        console.log("Это будущее")
    }
};

logInfoAbout("Феодор", 2023);

//Массивы
const cars = ["vaz", "gaz", "volga"];
console.log(cars);

//const cars1 = new Array("vaz", "gaz", "volga");
//console.log(cars);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(cars.length);

cars[0] = "zaz"
console.log(cars);

//Циклы
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car);
};
    
for (const car of cars) {
    console.log(car);
};

//Объекты
const names = {
    1: "Ivan", 
    2:"Piter", 
    3:"Mixa",
    languages:["ru", "en", "uz"],
    haswife: true,
    greet: function() {
        console.log("greet");
    }
}

console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names.languages);
console.log(names.haswife);
console.log(names.greet);//Непонятно, почему не просто "greet", а показывает функцию с консоль-логом???

