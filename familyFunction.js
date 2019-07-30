// Section One 
// create "aboutMe" object 
var aboutMe = {
    name: "Brecht",
    age: 23,
    gender: "Male",
    favorite_food: "Chicken Curry",
    favorite_series: ["Chernobyl","Mad Men", "Black Mirror"],
    favorite_movies: ["Tora Tora Tora", "Black Cat, White Cat"],
    single: false
};

// Section Two 
// CONTRUCTOR for family
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("Peter", "Nulens", 57, "Brown");
var myMother = new Person("Guadelupe", "Acedo", 52, "Grey");
var myCoach = new Person("Shutsen", " ", 33, "Brown");


const targetFamilyButtons = document.getElementsByClassName("family-buttons")[0];

const personalButton = document.getElementById("personal-button");
const familyButton = document.getElementById("family-button");
const displayScreen = document.getElementById("screen");
const personalScreenContent = document.getElementById("personal-content");
const familyScreenContent = document.getElementById("family-content");
var createdFamilyButtons = false;
// About Me button 
personalButton.addEventListener("click", function () {
    console.log(targetFamilyButtons);
    personalScreenContent.style.display = "block";
    familyScreenContent.style.display = "none";
    personalScreenContent.innerHTML = `Hi, I am ${aboutMe.name}, and I am ${aboutMe.age} years old.`
})

// Adding family-buttons on click 
// 
familyButton.addEventListener("click", function () {
    if (createdFamilyButtons) {
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class","family-buttons");

    var fatherButton = document.createElement("button");
    var motherButton = document.createElement("button");
    var coachButton = document.createElement("button");
    
    fatherButton.addEventListener("click", function () {
        return showContent(myFather, 'father');
    })
    motherButton.addEventListener("click", function () {
        return showContent(myMother, 'mother');
    })
    coachButton.addEventListener("click", function () {
        return showContent(myCoach, 'coach');
    })
    
    const fatherText = document.createTextNode("Father info");
    const motherText = document.createTextNode("Mother info");
    const coachText = document.createTextNode("Coach info");

    fatherButton.appendChild(fatherText);
    motherButton.appendChild(motherText);
    coachButton.appendChild(coachText);

    fatherButton.setAttribute("id","father-button");
    motherButton.setAttribute("id","mother-button");
    coachButton.setAttribute("id","coach-button");

    div.appendChild(fatherButton);
    div.appendChild(motherButton);
    div.appendChild(coachButton);

    displayScreen.insertBefore(div, displayScreen.childNodes[0]);
    personalScreenContent.style.display = "none";
    familyScreenContent.style.display = "block";
    createdFamilyButtons = true;
});

/**
 * person = Object
 * relation = String
 */
function showContent(person, relation) {
    console.log(person, relation)
    if (familyScreenContent.childNodes.length > 0) {
        familyScreenContent.removeChild(familyScreenContent.childNodes[0]);
    }
    var p = document.createElement("p");
    var content = document.createTextNode(`My ${relation}'s full name is ${person.firstName} ${person.lastName} and is ${person.age} years old`);

    p.appendChild(content);
    familyScreenContent.appendChild(p);

   
}

// var btn = document.createElement("BUTTON");   // Create a <button> element
// btn.innerHTML = "CLICK ME";                   // Insert text
// document.body.appendChild(btn);               // Append <button> to <body>


// All the data has to be displayed under the button
// "myFamily" has to have multiple buttons
// I want to make familyButtons on clicking "myFamily"
// familyButtons have to display IMG & data on clicking each individual 
// IMG & data have to be toggled on/off 

// - function for toggle 

// - get by id 

// - create button with id ="" + onclick 

// - display in "family-display"
