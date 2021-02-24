var level = require('level')
 
var db = level('./student-db')
const prompt = require('prompt-sync')({sigint: true});

  let inputAgain = true;

  while (inputAgain) {
      // Get user input
      var id = prompt('Enter your Id Number: ');
      var fullName = prompt('Enter Fullname: ');
      var age =  prompt('Enter your Age: ')
      var address = prompt('Enter your Address: ')
      acceptStudents (id,fullName,age,address)
      input = prompt('You want to input again (y/n)?: ');
      if (input == 'y') {
          inputAgain = true;
      } else if (input == 'n') {
          inputAgain = false;
      }
  }


 
function acceptStudents (id,fullName,age,address){

console.log('ID: ', Number(id));
console.log(`Name: `, fullName);
console.log('Age: ', Number(age))
console.log('Address: ', address)
}