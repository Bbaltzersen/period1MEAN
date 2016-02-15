"use strict"

var names = ["Lars", "Peter", "Jan", "Bo"];
var nameTransferArray = [];

function myFilter(callback) {
    for(var i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

Array.prototype.myFilter = myFilter;

var newArray = names.myFilter(function(name){
    if(name.length <= 3) {

        nameTransferArray.push(name);
    }
} );

console.log(nameTransferArray);

// Cap part

function myCap(callback) {
    for(var i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

Array.prototype.myCap = myCap;

var storeCapArray = [];

nameTransferArray.myCap(function(name){
    storeCapArray.push(name.toUpperCase());
} );

console.log(storeCapArray);