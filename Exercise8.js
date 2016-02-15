/**
 * Created by bbalt on 15/02/2016.
 */
"use strict"

//First we create the object

var person = {name: "Bja", age: "23", sex: "m", email: "a@a.dk"};

// goes through the person object in a for loop

for(var attributes in person) {
    console.log(person[attributes]);
};

// deleting the person

delete(person.email);

//goes through the person after deleting

console.log("Itterating over it again");
for(var attributes in person) {

    console.log(person[attributes]);
};

// checks properties

console.log(person.hasOwnProperty('email'));
console.log(person.hasOwnProperty('name'));

// makes the constructor

function perso(nam, lastname, age) {
    this.nam = nam;
    this.lastname = lastname;
    this.age = age;
}

// adds a the person

var pers = new perso("Dan", "Andersen", "22");
console.log(pers);

// checks properties

console.log(listAllProperties(pers))

function listAllProperties(o){
    var objectToInspect;
    var result = [];


    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}
