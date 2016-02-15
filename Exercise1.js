/**
 * Created by bbalt on 14/02/2016.
 */
"use strict"

// Exercise 1

var nameTransferArray = [];
var nameTransferArrayCap = [];
var nameArrray = ["Bet", "Lets", "Keta"];
var i;

var narray = nameArrray.filter(function(name){
    return name.length <= 3;
})

var UpperArray = narray.map(function(upper){
    return upper.toUpperCase();
})

console.log(narray);
console.log(UpperArray);

// Exercise 2

function myFilter(arr, callback){
    for(i = 0; i < arr.length; i++) {
            callback(arr[i]);
    }
}


console.log(nameArrray);
myFilter(nameArrray, function(name){
    if(name.length <= 3) {
        nameTransferArray.push(name);
    }
})

console.log(nameTransferArray);

function myCap(arr,callback) {
    for(i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

myCap(nameTransferArray, function (name) {
    nameTransferArrayCap.push(name.toUpperCase());
})

console.log(nameTransferArrayCap);