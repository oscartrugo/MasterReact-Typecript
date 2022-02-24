class Shape {
    #privateVariable = 'privateVariable'
    publicVariable = 'publicVariable'
    static staticVariable = 'staticVariable'

    constructor(height, width){ //height and width are private variables
        this.height = height; //declaring public variable
        this.width = width; //declaring public variable
    }

    getArea(){
        return 'not implemented'
    }

    getPrivateData(){
        return this.#privateVariable; //Value fetched of a private variable
    }
}

class Square extends Shape{
    getArea(){
        return this.height * this.width
    }

    getParentClassArea(){
        return super.getArea(); //Calling a parent attribute in the child class
    }
}

const mySquare = new Square(5, 8);

console.log(mySquare.getPrivateData())
//console.log(mySquare.getParentClassArea())

//const myShape = new Shape(5, 10);

// console.log(myShape.height)
// console.log(myShape.width)
// //we can access a public variable
// console.log(myShape.publicVariable)
//Calling an static variable
//console.log(Shape.staticVariable)

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
 */;