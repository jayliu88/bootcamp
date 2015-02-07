//This is the funtion defintion 
var fruits = ["kiwi", "strawberry", "plum"];

//Array example
fruits.length;

//Adding Objects
fruits.push("orange");
fruits.slice(1);

//This is the function defintion
var pluaralize = function(word) {
    return word + "s";
}

//Calling the function of multiple
console.log(pluaralize("desk"));

//Array for Each. Calling for all fruits. 
fruits.forEach(function(fruit) {
  console.log(fruit);
})

//
var myVariable = ["2"];

//Conditional True Statement
if(myVariable > 1) {
  console.log('YAY');
}