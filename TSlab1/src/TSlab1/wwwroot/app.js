//let someNumber = Number.MAX_VALUE;
//someNumber += someNumber;
////someNumber = someNumber * Infinity;
//let dogName: string = 'Fido';
//function doSomething() {
//    let dogName: string = 'Havoc';
//    let dogBreed: string = 'Lab';
//    if (dogName == 'Havoc') {
//        let dogBreed: string = 'Black Lab';
//        console.log(dogBreed + "From if"); // what will output? Black Lab
//    }
//    console.log(dogName + "From function");  // what will output? Havoc
//    console.log(dogBreed + "From function"); // what will output? Lab
//}
//doSomething();
//console.log(dogName + "From Globa");  // what will output? Fido
//console.log(dogBreed); // what will output? Error
//let shoppingCart = [
//    { name: 'Eggs', price: 5.00, quantity: 2 },
//    { name: 'Milk', price: 3.25, quantity: 1 },
//    { name: 'Bread', price: 2.25, quantity: 4 },
//    { name: 'Ham', price: 4.75, quantity: 1 },
//    { name: 'Cheese', price: .75, quantity: 3 }
//];
//let prices = shoppingCart.map(function (obj) {
//    return obj.price * obj.quantity;
//});
//class Person {
//    firstName: string;
//    lastName: string;
//    getFullName() {
//        return this.firstName + this.lastName;
//    };
//}
//class Email {
//    to: string;
//    from: string;
//    subject: string;
//    constructor(to: string, from: string, subject: string) {
//        this.to = to;
//        this.from = from;
//        this.subject = subject;
//    }
//
//need to ask about this one
//class Hamburger {
//     getPrice(cost: number) {
//        return cost;
//    }
//    constructor(public name: string = 'Hamburger') {
//    }
//}
//class Cheeseburger extends Hamburger {
//    getPrice(cost: number) {
//        return super.getPrice(cost) + 1;
//    }
//    constructor(name: string = 'Cheeseburger') {
//        super(name);
//    }
//}
//Your store sells two types of products.On the one hand, your store sells fruits which have name, price, and color properties.
//On the other hand, your store sells telephones which have name, price, and loudness properties.
//Create an array named inventory that contains 5 products: 3 fruits and 2 telephones.
//Create a function named showInventory() that displays the name and price of each of the products in your store's inventory.
//The showInventory() method should accept any object that implements the Product interface.
//interface IProduct {
//    name: string;
//    price: number;
//}
//let inventory = [{ name: 'apple', price: 0.50, color: 'red' }, { name: 'banana', price: 0.20, color: 'yellow' }, { name: 'orange', price: 0.60, color: 'orange' }, { name: 'apple', price: 22.50, loudness: 5 }, { name: 'nokia', price: 28.50, loudness: 9 }]
//let showInventory = function (product: IProduct) {
//    console.log('Item: '+product.name + ' '+ 'Price: '+product.price);
//};
//inventory.forEach(function (value) {
//    showInventory(value);
//})
//Namespace Practice
//Create two namespaces where one is called MyApp, and the other called MathUtility.
//Inside of the MathUtility namespace, craete a class  called Calculator that has four methods where each 
//methods does one of the mathematical operation, addition, substraction, multiplication, division.
//Make sure to export the Calculator class.
//Within the MyApp namespace, create a new instance of a Calculator class to test that it is working.
//namespace MathUtility {
//    export class Calculator {
//        add(num1:number, num2:number) {
//            return num1 + num2;
//        }
//        subtract(num1: number, num2: number) {
//            return num1 - num2;
//        }
//        multiply(num1: number, num2: number) {
//            return num1 * num2;
//        }
//        divide(num1: number, num2: number) {
//            return num1 / num2;
//        }
//    }
//}
//namespace MyApp {
//    let calc = new MathUtility.Calculator();
//    console.log(calc.add(23, 15));
//}
//class WeatherService {
//    public weatherData;
//    public getWeather(callback) {
//        let url = `http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=${this.city}`;
//        let request = new XMLHttpRequest();
//        request.addEventListener('load',  () => {
//            // parse weather data from Ajax call
//           this.weatherData = JSON.parse(request.responseText);
//            // invoke callback to notify that we are done
//            callback();
//        })
//        request.open('GET', url);
//        request.send();
//    }
//    constructor(private city: string) { }
//}
//// create instance of weather service for Seattle
//let service = new WeatherService('Meadville');
//// invoke the service to get weather data for Seattle
//service.getWeather(() => {
//    console.log(service.weatherData);
//});
//Lab 1 - Curry Functions
//Create a curry function named increment() that enables you to generate functions that increment by different numbers:
//let increment = function (incNum:number) {
//    return function (num:number) {
//        console.log(`${num} is incremented by ${incNum} to get ${num + incNum}`)
//    }
//}
//// create function that increments by 10
//let incrementByTen = increment(10);
//incrementByTen(34); // prints 44
//// create function that increments by 50
//let incrementByFifty = increment(50);
//incrementByFifty(34); // prints 84 
//# sourceMappingURL=app.js.map