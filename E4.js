
// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

// Ответ:

const userIvanov = function(user) {
  user = {Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'}
for (let key in user) {
  console.log(key+ ': ' + user[key]);
}
  
 }
userIvanov();

 //"Имя: Иван"
// "Фамилия: Иванов"
// "Возраст: 25"


// Либо:

const userIvanov = {
  Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'
 }

console.log(userIvanov)

// [object Object] {
//   Возраст: "25",
//   Имя: "Иван",
//   Фамилия: "Иванов"
// }

// Либо:

const userIvanov = {
  Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'
 }
const key1 = 'Имя';
const key2 = 'Фамилия';
const key3 = 'Возраст';
console.log(`${key1}: ${userIvanov[key1]}, ${key2}: ${userIvanov[key2]}, ${key3}: ${userIvanov[key3]}`)

//"Имя: Иван, Фамилия: Иванов, Возраст: 25"

// Либо:

const userIvanov = {
  Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'
 }

Object.getOwnPropertyNames(userIvanov).forEach(function(val) {
  console.log(val + ': ' + userIvanov[val]);
});
 //"Имя: Иван"
// "Фамилия: Иванов"
// "Возраст: 25"

// Либо:

const userIvanov = {
  Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'
 }

for (let key in userIvanov) {

     console.log(key+ ': ' + userIvanov[key]);
}

// Надеюсь какой-то вариант правильный. Не очень понял задание.

// ****************************************************************************************

// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект,
//  а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

// Ответ:

function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Alex", 
    ownCity: "Tver",
    age: 19,
    course: "Frontend"
  };


  console.log(showProps(student1, "same"));  // false
  console.log(showProps(student1, "name"));  // true

// *******************************************************************************************

// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

// Ответ:

function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));

// **********************************************************************************************

// Задание 4.

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

// Ответ:


function ElectricalAppliance (name, manufacturer, power, turn ){
  this.name= name,
  this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
  this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
  this.manufacturer = function(){
    
    console.log(`The ${name} is manufacturied by ${manufacturer}.`)
  }
}

const iron1 = new ElectricalAppliance('iron', 'Tefal');
const power  = new ElectricalAppliance('iron', '', 650);
const turn = new ElectricalAppliance('iron', '', '', 'on');
iron1.manufacturer();
power.power();
turn.turn();


function Lighting (name, manufacturer, power, led){
  this.name= name,
  this.led = function(){console.log(`The ${this.name} is ${led}.`)}
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
  this.power = function(){console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
}

const lamp1 = new Lighting('lamp', 'IKEA');
const power1  = new Lighting('lamp','', 50);
const led = new Lighting('lamp','', '', 'LED');
power1.power();
lamp1.manufacturer();
led.led();


function PC (name, manufacturer, display, power){
  this.name= name,
  this.display = display,
  this.power = power,
  this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
  Display is ${this.display}'. Power is ${this.power} W.`)}
}

const comp = new PC('computer', 'IBM', 17, 220);

comp.manufacturer();

// ***************************************************************************************************

// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name, manufacturer) {
        this.name = name;
        this.manufacturer = manufacturer;
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}.`
    }

    getPowerConsumption = function (power) {
        return `Power Consumption of the ${this.name} is ${power} W.`
    }

    getTurn = function (on_off) {
        return `The ${this.name} is switched ${on_off}.`
    }
}


class Lighting extends ElectricalAppliance {
    constructor(name, manufacturer, typeOfLamp) {
        super(name);
        this.manufacturer = manufacturer
        this.typeOfLamp = typeOfLamp;
    }

    getPowerConsumption = function (power) {
        return `Electricity consumption of the ${this.name} is ${power} W.`
    }
}

class PC extends ElectricalAppliance {
    constructor(name, manufacturer, display) {
        super(name);
        this.manufacturer = manufacturer;
        this.display = display;
    }

    getTurn = function (on_off) {
        return `This ${this.name} is switched ${on_off}.`
    }

    getInfo() {
        return `The ${this.name} is manufacturied by ${this.manufacturer}. Display is ${this.display}'.`
    }
}


const iron = new ElectricalAppliance("iron", "Tefal");

console.log(iron.getInfo());  // "The iron is manufacturied by Tefal."
console.log(iron.getPowerConsumption(650));  // "Power Consumption of the iron is 650 W."
console.log(iron.getTurn("on"));  // "The iron is switched on."
// console.log(iron)


const lamp = new Lighting("lamp", "IKEA", "LED");

console.log(lamp.getInfo());  // "The lamp is manufacturied by IKEA."
console.log(lamp.getPowerConsumption(20));  // "Electricity consumption of the lamp is 20 W."
console.log(lamp.getTurn("off"));  // "The lamp is switched off."


const computer = new PC("computer", "Toshiba", 17);

console.log(computer.getInfo());  // "The computer is manufacturied by Toshiba. Display is 17'."
console.log(computer.getPowerConsumption(220));  // "Power Consumption of the computer is 220 W."
console.log(computer.getTurn("on"));  // "This computer is switched on."