// Section One 
// create "aboutMe" object 
var aboutMe = {
    name: "Brecht",
    age: 23,
    gender: "Male",
    favorite_food: "Chicken Curry",
    favorite_series: ["Chernobyl","Mad Men", "Black Mirror"],
    favorite_movies: ["Tora Tora Tora", "Black Cat, White Cat", 1, 2, 3, 4, 5],
    single: false,
    getFirstTwoFavouriteMovies: function (number) {
        return aboutMe.favorite_movies.splice(0, number);
    }
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
var myGirlfiend = new Person("Veronica", "Martchenko", 19, "Blue");
var myOmi = new Person("Jacqueline", "Dreesen", 88, "Brown");

const personalButton = document.getElementById("personal-button");
const familyButton = document.getElementById("family-button");
const displayScreen = document.getElementById("screen");
const personalScreenContent = document.getElementById("personal-content");
const familyScreenContent = document.getElementById("family-content");
var createdFamilyButtons = false;
// About Me button 
personalButton.addEventListener("click", function () {
    console.log(aboutMe.getFirstTwoFavouriteMovies(5))
    const targetFamilyButtons = document.getElementsByClassName("family-buttons")[0];
    if (targetFamilyButtons) {
        targetFamilyButtons.style.display = "none";
    }

    personalScreenContent.style.display = "block";
    familyScreenContent.style.display = "none";
    personalScreenContent.innerHTML = `Hi, I am ${aboutMe.name}, and I am ${aboutMe.age} years old.`
})

// Adding family-buttons on click 
// 
familyButton.addEventListener("click", function () {
    const targetFamilyButtons = document.getElementsByClassName("family-buttons")[0];
    if (targetFamilyButtons) {
        targetFamilyButtons.style.display = "block";
    }

    personalScreenContent.style.display = "none";
    familyScreenContent.style.display = "block";

    if (createdFamilyButtons) {
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class","family-buttons");

    const relatives = [
        { relation: 'father', info: myFather },
        { relation: 'mother', info: myMother },
        { relation: 'coach', info: myCoach },
        { relation: 'girlfriend', info: myGirlfiend },
        { relation: 'grandmother', info: myOmi }
    ]

    makeMeMyButtons(relatives, div)

    displayScreen.insertBefore(div, displayScreen.childNodes[0]);
    personalScreenContent.style.display = "none";
    familyScreenContent.style.display = "block";
    createdFamilyButtons = true;
});

function makeMeMyButtons(totaalAndereNaamMaarIsDezelfdeArray, div) {
    for (let i = 0; i < totaalAndereNaamMaarIsDezelfdeArray.length; i++) {
        const relative = totaalAndereNaamMaarIsDezelfdeArray[i]; // { relation: 'father', info: myFather } (eerste cycle), dan volgend object in array, volgend object...
        
        var button = document.createElement("button");

        button.addEventListener("click", function () {
            return showContent(relative.info, relative.relation);
        })

        const text = document.createTextNode(`${relative.relation} info`);

        button.appendChild(text);

        button.setAttribute("id", `${relative.relation}-button`);

        div.appendChild(button);
    }
}

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
