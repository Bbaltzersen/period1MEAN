/**
 * Created by bbalt on 15/02/2016.
 */
"use strict"


var a = [1,2,3];
var b = [1,2,3];
var numKeeper=[];
var sum = 0;

function handleNumArrays(arr1, arr2, callback){
    for( var i = 0; i < arr1.length; i++) {
        callback(arr1[i], arr2[i]);
    }
}

handleNumArrays(a, b, function(num1,num2){

    numKeeper.push(num1 + num2);

});

console.log(numKeeper.toString());

handleNumArrays(a, b, function(num1,num2){

    sum += num1 + num2;

});

console.log(sum);

handleNumArrays(a, b, function(num1,num2){

    sum += num1 + num2;

});

console.log(sum);
numKeeper = [];
handleNumArrays(a, b, function(num1,num2){

    numKeeper.push(num1 * 10);
    numKeeper.push(num2 * 10);

});

console.log(numKeeper.toString());