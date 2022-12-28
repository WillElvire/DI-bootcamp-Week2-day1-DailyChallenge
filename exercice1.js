let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();
fruits.sort();
fruits.push("kiwi");
fruits = fruits.filter((value)=> value != "Apples");
fruits.reverse();
console.log(fruits);
