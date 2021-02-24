var level = require( 'level");

var db = level('./student-db')

const prompt = require('prompt-sync")({sigint: true});

let inputAgain = true;

while (inputAgain) {

1/ Get user input

var id = prompt('Enter your Id Number: '); 

var fullName prompt("Enter Fullname: ');

var age = prompt('Enter your Age: ')

var address = prompt ('Enter your Address: ')

acceptStudents (id, fullName, age, address) input = prompt('You want to input again (y/n)?:");

if (input == 'y') { %3D%3D inputAgain = true; %3D

} else if (input == 'n')

inputagain = false; %3D

{

}

function acceptstudents (id, fullName , age, address){

console.log('ID: ', Number (id));

console.log( Name: , fullName); console.log('Age: ', Number (age))

console.log('Address: ", address)

}