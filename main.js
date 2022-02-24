class Printer{
    name= "I am Printer Class" //public variable

    printName(){
        console.log('printName: ', this.name);
    }

    printNameArrowFn = () => {
        console.log('printNameArrowFn: ', this.name);
    }
}

const myPrinter = new Printer();
// myPrinter.printName()
// myPrinter.printNameArrowFn()

const customPrinter = {
    name: "I am Custom Printer",
    printName: myPrinter.printName,
    printNameArrowFn: myPrinter.printNameArrowFn,
}

//customPrinter.printName();
customPrinter.printNameArrowFn();

/**
 * When to use a static variable? And when to use a public variable?
 * You will only use public variable if you want that variable to only leave when you instantiate
 * the class.
 * 
 * But if you want to create a variable that will be globally accessible, even if you change the value,
 * then you can actually use a static variable, because you can access it without instantiating the class.
 * 
 * 
 * How can we access private variable?
 * You need to create a function to return the value of it. 
 * 
 * Whats the use of a private variable?
 * If you have a data that you actually use, for example, computing the area, and you don't want to expose 
 * that data on how you compute the area, then you can actually create a private variable, so that the user
 * of the shape class or the square class doesn't know how you calculate the value of the getArea
 * 
 * If we are using Arrow function, it doesn't care whether you actually execute the funciton. What matters
 * most is where you created the arrow function, the scope.
 */;