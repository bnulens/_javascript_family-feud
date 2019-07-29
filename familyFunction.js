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

// Get the object to print in HTML
document.getElementById("personalButton").addEventListener("click", function(){
    document.getElementById("section-one").innerHTML = "I am " + aboutMe.Name + " and I am " + aboutMe.Age + " years old.";
});

// Make BUTTONS toggle 
function houdini () {
    var x = document.getElementById("section-one");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function houdini2 () {
    var y = document.getElementById("section-two");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
}
function familyToggle(button) {
    var x = button.id;
    switch (x) {
        case 'personalButton':
            houdini(x);
            break;
        case 'familyButton':
            houdini2(x);
            break;
        case 'familyMembers':
            houdini(x);
            break;
        case 'fatherButton':
            houdini(x);
            break;
        case 'motherButton':
            houdini(x);
            break;      
        case 'coachButton':
            houdini(x);
            break;
        default:
            return false;
    }
}


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
var myCoach = new Person("Shutsen", "", 33, "Brown");
var familyMembers = document.getElementById("family-members");

document.getElementById("familyButton").addEventListener("click", function(){
    document.getElementById("section-two").innerHTML = familyMembers;
});

