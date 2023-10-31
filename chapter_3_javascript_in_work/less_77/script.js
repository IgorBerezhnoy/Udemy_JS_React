'use strict';

class Rectangle {
    height;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height*this.width
    }
}
class ColoredRectangleWithText extends Rectangle{
    color
    text
    constructor(height, width,color, text) {
        super(height, width);
        this.color=color
        this.text=text
    }
    showMyProps(){
        console.log(`text:${this.text} color:${this.color}`);
    }

}
const square=new Rectangle(10,10)
const long=new Rectangle(20,120)
let redSquare= new ColoredRectangleWithText(15,20,"red", "Hello")
redSquare.showMyProps()
console.log(redSquare.calcArea())
// console.log(redSquare);
// console.log(square.calcArea())
// console.log(long.calcArea())


