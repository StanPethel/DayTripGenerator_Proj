"use strict"

// let city = "destination";
// let restaurant = "fun";
// let transportation = "travel";
// let entertainment = "dinner";

// let trip =[city, restaurant, transportation, entertainment];

// let finalOption = ""
// for (let i = 0; i< trip.length; i++){
//     finalOption += trip[i] + "\n";
// }
// alert(finalOption);

let destination = Math.floor(Math.random() * 4);

if(destination >= 0 && destination <= 0){
    console.log("Atlanta");
} 
if(destination >= 1 && destination <= 1){
    console.log("orlando")
} 
if(destination >= 2 && destination <= 2){
    console.log("Myrtle Beach")
} 
if(destination === 3 || destination === 3){
    console.log("Miami")
} 
let fun = Math.floor(Math.random() * 4);

if(fun >= 0 && fun <= 0){
    console.log("dancing")
}
if(fun >= 1 && fun <= 1){
    console.log("movies")
}
if(fun >= 2 && fun <= 2){
    console.log("shopping")
}
if(fun === 3 || fun === 3){
    console.log("fishing")
}

let travel = Math.floor(Math.random() * 4);

if(travel>= 0 && travel <= 0){
    console.log("biking")
}
if(travel >= 1 && travel <= 1){
    console.log("driving")
}
if(travel>= 2 && travel <= 2){
    console.log("flying")
}
if(travel === 3 || travel === 3){
    console.log("boating")
}

let dinner = Math.floor(Math.random() * 4);

if(dinner>= 0 && dinner <= 0){
    console.log("Olive Garden")
}
if(dinner >= 1 && dinner <= 1){
    console.log("Steak House")
}
if(dinner>= 2 && dinner <= 2){
    console.log("KFC")
}
if(dinner === 3 || dinner === 3){
    console.log("Fish Fry")
}

// let userInput = prompt("are these choices ok?");
// if(userInput === "Olive Garden");

// let city = "destination";
// let restaurant = "fun";
// let transportation = "travel";
// let entertainment = "dinner";

let trip =[destination, fun, travel, dinner];

let finalOption = ""
for (let i = 0; i< trip.length; i++){
    finalOption += trip[i] + "\n";
}
alert(finalOption);



// function returnAString(string){
//     for(let i = 0; i < string.length; i++){
//         let someVeriable = i;
//     }
// }

// let userInput = prompt("what is your name");
// console.log(userInput);




// // ///////////////////////////////////
// // // let thisCount = 0;
// // // console.log("thisCount");

// // let legalDrivingAge = 17;
// // console.log(legalDrivingAge);
// // let userAge = prompt("What Is Your Age?");
// // console.log(userAge)
// // if (userAge < legalDrivingAge){
// //     console.log("you can't drive");
// //     }
// // else if (userAge >= legalDrivingAge)
// //     {
// //     console.log("You can drive");
// //     }
//let displayGreeting = "descriptor";
///////////////////////////////////////////////////////////
// function displayGreeting(timeOfDay, jj){
//     console.log("good" + timeOfDay +", " + jj +"!");
// }
// function getTimeOfDay(clockTime){
//     let timeOfDay;
//     if(clockTime < 1200){
//         timeOfDay = "morning";
//     } 
//     else if (clockTime < 1700){
//         timeOfDay = "afternoon";
//     }
//     else{
//          timeOfDay = "evening";
//     }
//     return timeOfDay;
// }
// let descriptor = getTimeOfDay(1100);
// displayGreeting = prompt(descriptor, "jj");
////////////////////////////////////////////////////////
// let answer = "no";
// let location = getDestinationPreference(answer);
// let City = determineCity(location);
// let Meal = determineMeal(food);
// let Entertainment = determineEntertainment(places);
// let Travel = getTravel(transportation);
// let randomizedDate = getRandomDate();
// getDateNight(City, Meal, Entertainment, Travel);


// function getDestinationPreference(answer){
//     if(answer === "yes"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function determineCity(ourSpot){
//     let City;
//     if(ourSpot === true){
//         City = "Atlanta";
//     }
//     else {
//         City = prompt("what city would you like?");
//     }
//     return City;
// }
// function determineMeal(dinner){
//     let Meal;
//     if(dinner === true){
//        Meal = "Olive Garden";
//     }
//     else {
//         Meal = prompt("What place would you like to eat?");
//     }
//     return Meal;
// }
// function determineEntertainment(places){
//     let Entertainment;
//     if(places === true){
//         Entertainment = "dancing";
//     }
//         else {
//             Entertainment = prompt("where would you like to go?");
//         }
//     return Entertainment;
// }
// function getTravel(transportation){
//     let Travel;
//     if(transportation === true){
//         Travel =  "car";
//     }
//     else {
//         Travel = prompt("how would you like to arrive?");
//     }
//     return Travel;
// }
// function getRandomDate(){
//     let response = prompt("Are you ready to date?");
//     return parseInt(response);
// }
// function getDateNight(destination){
//     for(let i = 0; i< destination; i++){
//         alert("here is your random date" + destination + "!");
//     }
// }
// let answer = "no";
// let ourSpot = getDestinationPreference(answer);
// let City = determineCity(location);
// let Meal = determineMeal(dinner);
// let Entertainment = determineEntertainment(places);
// let Travel = getTravel(transportation);
// let randomizedDate = getRandomDate();
// getDateNight(City, Meal, Entertainment, Travel);

////////////////////////////////////////////////////
// let text;
// let favDrink = prompt("What's your favorite cocktail drink?");
// switch(favDrink) {
//   case "Martini":
//     text = "Excellent choice! Martini is good for your soul.";
//     break;
//   case "Daiquiri":
//     text = "Daiquiri is my favorite too!";
//     break;
//   case "Cosmopolitan":
//     text = "Really? Are you sure the Cosmopolitan is your favorite?";
//     break;
//   default:
//     text = "I have never heard of that one..";
//     break;
// }
// let choice = option;
// console.log(choice);
// do{ 
//   prompt("Choose option between 1 and 3");
// }while(!(choice > 3 || choice < 1));
// if (choice == 1) {
//     choice = pineCost;
// } else if (choice == 2) {
//     choice = oakCost;
// } else if (choice == 3) {
//     choice = mahoganyCost;
// }
// if (System.out.println("choose which city you want to go between 1 and 4"),
// choice = keyboard.nextInt()
//   (choice > 4 || choice < 1);
// if (choice ==1){
//     choice = Atlanta;
// } else if (choice == 2){
//     choice = Orlando;
// } else if (choice == 3){
//     choice = MyrtleBeach;
// } else if (choice == 4){
//     choice = Miami;
// }
// // let userAge = prompt("What Is Your Age?");
// // console.log(userAge)
// // if (userAge < legalDrivingAge){
// //     console.log("you can't drive");
// //     }
// // else if (userAge >= legalDrivingAge)
// //     {
// //     console.log("You can drive");
// //     }
//let displayGreeting = "descriptor";
// let userDestination = prompt("where would you like to go?");
// console.log(userDestination);
////////////////////////////////////////////////////////

































//  let colors = ["black", "orange"];
//  let colorSize = colors.push("blue" , "red" ,"white" , "green" ,"yellow");
//  console.log(colors);

// function checkColor(arrayOfStringColors){
//     let colorToCheck = prompt("please enter a color!");
//     console.log(colorToCheck);
//     for(let i = 0; i < arrayOfStringColors.length; i++)
//         console.log(arrayOfStringColors[i])
//         if (arrayOfStringColors.length >=3)
//             return "you found my color!";
//         else  (arrayOfStringColors !==1) 
//             return "please try again!";      
//  }     // what conditionals would be appropriate here? if/elseif/else
// checkColor("colorToCheck");
