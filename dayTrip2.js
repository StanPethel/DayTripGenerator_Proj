"use strict";

let places =["Atlanta", "Orlando", "Miami", "Birmingham"];
let food = ["pizza", "steak", "burgers", "chicken"];
let travel = ["automobile", "flying", "uber", "biking"];
let activities = ["dancing", "movies", "theatre", "friends"];

function generateRandomplace(arrayOfPlaces){
    return arrayOfPlaces[Math.floor(Math.random() * arrayOfPlaces.length)];
}
let randomPlace = generateRandomplace(places);
let randomFood = generateRandomplace(food);
let randomTravel = generateRandomplace(travel);
let randomActivities = generateRandomplace(activities);
console.log(randomPlace);
console.log(randomFood);
console.log(randomTravel);
console.log(randomActivities);

alert(randomPlace + "\n" + randomFood + "\n" + randomTravel + "\n" + randomActivities);

let userInput = prompt("Are you happy with these options? type yes or no");

switch (userInput){
    case "no":
        prompt("what would you like to change? \n Press 1 for Destination \n Press 2 for Restaurant \n Press 3 for Transportation \n Press 4 for Entertainment" );
    break;
    case "alpha":
        alert(randomPlace + "\n  has been added"); 
        break;
    case "yes":
    alert("Enjoy Your Trip!");
     default:
     alert("Be Safe");
     break;  
}
    if(userInput = 1){
        alert(randomPlace + "\n  has been added"); 
    } else { userInput = 2
        alert(randomFood + "\n has been added");
    }  if (userInput = 3){
        alert(randomTravel + "\n has been added");
    } else { userInput = 4
        alert(randomActivities + "\n has been added");
    }
    userInput = prompt();


    // 