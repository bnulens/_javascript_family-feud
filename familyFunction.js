// Section One 
// create "aboutMe" object 
var aboutMe = {
    Name: "Brecht",
    Age: 23,
    Gender: "Male",
    "Favorite food": "Chicken Curry",
    "Favorite series": ["Chernobyl","Mad Men", "Black Mirror"],
    "Favorite movies": ["Tora Tora Tora", "Black Cat, White Cat"],
    Single: false
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

let personalButton = document.getElementById("personal-button");
let familyButton = document.getElementById("family-button");

personalButton.addEventListener("click", function () {
    document.getElementById("screen").innerHTML = "Hi, I am " + aboutMe.Name + " and I am " + aboutMe.Age + " years old.";
})

familyButton.addEventListener("click", function getFamilyMembers(){
})

// Make BUTTONS toggle 
function houdini () {
    var x = document.getElementById("screen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function buttonToggle(button) {
    var x = button.id;
    switch (x) {
        case 'personal-button':
            houdini(x);
            break;
        case 'family-button':
            houdini(x);
            break;
        default:
            return false;
    }
}

function getFamilyMembers () {
var div = document.createElement("div");
var fatherButton = document.createElement("button");
var motherButton = document.createElement("button");
var coachButton = document.createElement("button");

div.setAttribute("class","family-buttons");
fatherButton.setAttribute("id","father-button");
motherButton.setAttribute("id","mother-button");
coachButton.setAttribute("id","coach-button");

div.appendChild(fatherButton);
div.appendChild(motherButton);
div.appendChild(coachButton);

return div;
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
