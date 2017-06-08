// Знакомся... это ES6 детка!

// 1. let
// Описание: let область видимости {}, var область видимости function.
// Пример:
// let name = 'Max';

 //2. const
 //Описание: константа, может быть обьявлена только 1 раз
 //и значение должно быть присвоенно сразу.
 //Пример:
 //const PI = 3.14169;

// 3. spread operator "..."
// Описание: оператор разворота, позволяет разворачивать элементы массива
// для передачи в качестве аргументов функции или в элементы другого массива.
// Пример1:
// let array1 = [0, 1, 2]
// let array2 = [...array1, 3, 4, 5]
// Пример2:
//let numbers = [1, 2, 3];
// function add(x, y, z){
// 	console.log(x + y + z); 
// }
// add(...numbers); //6

// 4.template strings `text`
// Описание: Шаблонная строка 
// Пример1:
// function createEmail(to, from, subject, message){
// 	console.log(`
// 		To: ${to}
// 		From: ${from}
// 		Subject: ${subject}
// 		Message: ${message}
// 	`);
// 	createEmail('mamo@gmail.com', 'mmolod13@gmail.com', 'Hello', 'How are you?')
// }
// Пример2:
// Для шаблона можно присвоить тег. Для этого нужно перед шаблоном 
// написать название функции.
// В literals передается массив строк из которых состоит шаблон, а в value значение переменной name.
// Функция должна возвращать строку!
// let name ='Bill';
// console.log(upperName`Hello ${name}`); //Hello BILL
// function upperName(literals, value) {
// 	return literals[0] + value.toUppercase();
// }

// 5.Параметры функции
// В ES6 есть 2 нововведения:
// 1)Параметры по умолчанию(default parameters);
// Описание: дает возможность задать параметры по умолчанию если они не были переданны.
// Пример:
// function greet(greeting = 'Hello', name = 'friend'){
// 	console.log(`${greeting} ${name}`);
// } 
// grret('Hi', 'Bill'); //Hi Bill
// grret('Hi'); //Hi friend
// grret(undefined, 'Bill'); //Hello Bill
// grret(); //Hello friend
// 2)Оставшиеся параметры(rest parameters);
// Описание: "...values" превращает отдельные элементы в массив
// Пример:
// function sum(...values){
// 	console.log(values.reduce(function(prevValue, currentvalue){
// 			return prevValue + currentvalue;
// 		})
// 	);
// }
// sum(2, 3, 5);//10

// 6.Цикл for...of
// Описание: перебирает значения. Помимо массивов позволяет итеировать и новые структуры 
// которые были добавлены в ES6: это обьект Set и Map
// Пример:
// let browsers = ['Chrome', 'Firefox', 'Opera'];
// for(let browser of browsers){
// 	console.log(browser);              //Chrome 
//                                        //Firefox 
//                                        //Opera
// }

// 7.Обьекты 
// Описание:
// 1) если название свойств совпадает с названием переменной то мы может указать только свойство,
// значение вставится автоматически из переменной с таким же названием.
// Пример:
// let firstName = 'Max',
// 	lastName = 'Molod',
// 	email = 'mamo@qapint.com';
// let person = {
// 	firstName,
// 	lastName,
// 	email
// }
// console.log(person);	//{firstName:"Max", lastName:"Molod", email:"mamo@qapint.com"}
// 2) Если мы хотим добавить метод в обьект то не нужно писать function
// let firstName = 'Max',
// 	lastName = 'Molod',
// 	email = 'mamo@qapint.com';
// let person = {
// 	firstName,
// 	lastName,
// 	email,
// 	sayHello(){
// 		console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
// 	}
// }
// person.sayHello();//Hi my name is Max Molod
// 3) свойства можно указывать динамически внутри обьекта
// Пример:
// function createCar(property, value){
// 	return {
// 		[property]: value
// 	}
// }
// console.log(createCar('vin', 1));// {vin: 1}
// 4) новая возможность создания get и set 
// let firstName = 'Max',
// 	lastName = 'Molod',
// 	email = 'mamo@qapint.com';
// let person = {
// 	firstName,
// 	lastName,
// 	email,
// 	get fullName(){
// 		return this.firstName + ' ' + this.lastName;
// 	},
// 	set fullName(value){
// 		this.firstName = value;
// 	}
// }
// console.log(person.fullName = 'Andew'); //Andrew
// console.log(person.fullName);//Andrew Molod

// 7.Классы 
// Описание:
//Класс это шаблон, по коорому создаются обьекты. Класс обпределяет свойство(какой будет обьект) и методы(что этот обьект будет делать).
//Для создания используется ключевое слово class 'имя'. 
//Пример:
// class Task{
// 	constructor(title){
		
// 	}
// } 
// console.log(typeof(Task));//function
//Классы это функции которые создают обьекты
/*

 function check(string){
 for (var i = 0; i < string.length; i++) {
 for (var j = i+1; j < string.length; j++) {
 if (string[i] == string[j]) {
 console.log("Повторение")
 return false;
 }
 }
 }
 console.log("НЕт повторений")
 }
 check("ahglvambn")*/
