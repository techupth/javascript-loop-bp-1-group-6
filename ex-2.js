// Exercise #2: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

// Start coding here
let i =0;
while (i < restaurants.length){
    //console.log("Restaurant Name: " + restaurants[i]); //checked value in loop
    newRestaurants.push("Restaurant Name: " + restaurants[i]);
    i++;
};
//console.log(restaurants); //["KFC", "MOMO PARADISE", "Nabezo"]
console.log(newRestaurants); //['Restaurant Name: KFC',Restaurant Name: MOMO PARADISE',Restaurant Name: Nabezo']