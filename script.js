let adoptAnswer;
function getname() {

    let nameAnswer = prompt("What is your name?");
    return nameAnswer
}

function animal() {

    while (animalAnswer == "no") {
        animalAnswer = prompt("Ummm, something went wrong! Do you like dogs and cats? yes/noyes");

    }
    if (animalAnswer == "yes") {
        adoptAnswer = prompt("Are you ready to adopt today? yes/no");
    }
}

function smallcatdog() {
    let pets = prompt("how many pets is the perfect number? 1-100");

    for (let i = 0; i < pets; i++) {

        document.write("<img class='smallcatdog' src='smallcatdog.png' alt='Cat Dog' />");
    }
}
let nameAnswer = getname();
let animalAnswer = prompt("Hello " + nameAnswer + ", do you like dogs and cats? yes/no");
animal()
while (adoptAnswer == "no") {
    adoptAnswer = prompt("Something went wrong! Are you ready to adopt TODAY! yes/no");
}
if (adoptAnswer == "yes") {
    document.write("<b>Outstanding! This is the perfect place for you. Take a look at our available animals for adoption</b>");
}