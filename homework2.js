//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
    console.log(Object.values(person3)[i])
    
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    print_info_arrow = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    
    incrementAge(old_age, add_year) {
        const new_age = old_age + add_year;
        console.log(`New Age of ${this.name} is ${new_age}`)
        let counter = new_age
        return function () { return counter++}
    }

}

let josh = new Person('Josh', 36);
let allen = new Person('Allen', 27);

console.log(josh.print_info_arrow())
console.log(allen.print_info_arrow())
console.log(allen.incrementAge(27,1),allen.incrementAge(28,1),allen.incrementAge(29,1))
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let string1 = 'This is a big word right here'
let string2 = 'Tiny'

const islargeString = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length >= 10 ){
            resolve("Big Word!")
        } else {
            reject("Small Word!")
        }
    })
}

console.log(islargeString(string1))