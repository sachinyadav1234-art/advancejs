//   class Classname {
//     constructor(prop1, prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
//   }
//   let obj = new Classname("arg1", "arg");
//   console.log(obj.prop1)
//   console.log(obj.prop2)


// class Dog{
//     constructor(dogname,weight,color,breed){
//         this.dogname = dogname;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("javascript",2.4, "brown","chihuahua");
// console.log(dog.dogname, "is a" , dog.breed,);

//CLASSES
//class name first letter should be capital letter

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }



//FUNCTION ON A CLASS ARE METHODS. WHEN DEFINING THE THESE METHOD THEN DONOT USE FUNCTION KEYWORD


// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("hi there ! I'm",this.firstname);
//     }
// }
//   constructor

// methods
// function on a class is called method

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("hi there",this.firstname);
//     }
// }


//                                             properties
//  class person{
//     #firstname;
//     #lastname;
 
//  constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//  }
// }
// let p = new person("maria","saga");
// console.log(p.firstname);
//                                               getters and setters
// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
    
// }
//                                      inheritance-reusability of code
// class Vehicle{
//     constructor(color, currentspeed,maxspeed){
//         this.color = color;
//         this.currentspeed;
//         this.maxspeed;

//     }
//     move(){
//         console.log("moving at" , this.currentspeed);
//     }
//     accelerate(amount){
//         this.currentspeed += amount;
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(color , currentspeed, maxspeed,fuel){
//         super(color, currentspeed, maxspeed);
//         this.fuel = fuel;
//     }
//     dowheelie(){
//         console.log("driving on one wheel");
//     }
// }
// let motor = new Motorcycle("black", 0 , 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
//                                        prototypes-
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// Person.prototype.introduce = function(){
//     console.log("hi, i, am", this.first.name);
// }
