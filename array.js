var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Iterates over array elements using for loop
for(var i = 0; i < fruits.length; i++) {    
    console.log(fruits[i]); 
}

// Iterates over array elements using for-of loop
for(var fruit of fruits) {    
    console.log(fruit); 
}

// Iterates over array elements using for-in loop
for(var fruit in fruits) {    
    console.log(fruits[fruit]); 
}

//Adding New Element at the end of the array using push()
var colors = ["Red", "Green", "Blue"]; 
colors.push("Yellow");
colors.push("Pink", "Voilet");
for(var i = 0; i < colors.length; i++) {    
    console.log(colors[i]); 
}

//Adding New Element at the beginning of the array using unshift()
var colors = ["Red", "Green", "Blue"]; 
colors.unshift("Yellow");
colors.unshift("Yellow", "Grey");
for(var i = 0; i < colors.length; i++) {    
    console.log(colors[i]); 
}

//Removing Element from the end of the array using pop()
var colors = ["Red", "Green", "Blue"]; 
var last = colors.pop();
console.log(last);

//Removing Element from the beginning of the array using shift()
var colors = ["Red", "Green", "Blue"]; 
var first = colors.shift();
console.log(first);

//Add OR Remove Element from the array at any position using splice()
var colors = ["Red", "Green", "Blue"];
var removed = colors.splice(0,1); 
 
console.log(colors); 
console.log(removed); 
console.log(removed.length); 
 
removed = colors.splice(1, 0, "Pink", "Yellow"); 
console.log(colors);
console.log(removed); 
console.log(removed.length); 
 
removed = colors.splice(1, 1, "Purple", "Voilet"); 
console.log(colors); 
console.log(removed);
console.log(removed.length);

//Creating a string from array using join and toString()
var colors = ["Red", "Green", "Blue"];
 
console.log(colors.join()); 
console.log(colors.join("")); 
console.log(colors.join("-")); 
console.log(colors.join(", ")); 
console.log(colors.toString());

//Extracting a portion of a array OR creating a subarray using slice()
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var subarr = fruits.slice(1, 3);
console.log(subarr);
console.log(fruits.slice(2)); 
console.log(fruits.slice(-2));
console.log(fruits.slice(2, -1));


//Merging Two array using concat()
var pets = ["Cat", "Dog", "Parrot"];
var wilds = ["Tiger", "Wolf", "Zebra"];
var bugs = ["Ant", "Bee"];
var animals = pets.concat(wilds, bugs); 
console.log(animals);

//Searching Through an Array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Banana")); 
console.log(fruits.indexOf("Pineapple"));
var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];
console.log(arr.includes(1)); 
console.log(arr.includes(6)); 
console.log(arr.includes(1, 2)); 
console.log(arr.includes(3, 4));
var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];
var result = arr.find(function(element) {
  return element > 4;
});
console.log(result);

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];
var result = arr.findIndex(function(element) {
  return element > 6;
});
console.log(result);

var arr = [1, 0, 3, 1, false, 5, 1, 4, 7];
var result = arr.filter(function(element) {
  return element > 4;
});
console.log(result); 
console.log(result.length);
