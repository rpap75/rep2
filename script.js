
let nameAnswer = prompt("What is your name?");

let animalAnswer = prompt("Hello " + nameAnswer + ", do you like dogs and cats? yes/no");
let adoptAnswer;

if (animalAnswer == "yes") {
    adoptAnswer = prompt("Are you ready to adopt today? yes/no");
}

else if (animalAnswer == "no") {
    document.write("<b>We're sorry to hear that you don't like dogs and cats. You can still check out our awesome available animals.</b>");
}

if (adoptAnswer == "yes") {
    document.write("<b>Outstanding! This is the perfect place for you. Take a look at our available animals for adoption</b>");
}

else if (adoptAnswer == "no") {
    document.write("<b>Well you never know. Check out our availble animals for adoption!</b>");
}







// Function

//document.write()
//prompt()
//console.log()
//alert()

//function addTwoNumbers(firstNumber, secondnumber){
//    let sum = firstNumber + secondnumber;
//}
//
//addTwoNumbers()