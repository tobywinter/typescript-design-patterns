// shapes
// Area, Perimeter
// simple - single function calculateTotalArea

interface Shape {
  area: number;
  perimeter: number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}
  get area() {
    return this.width * this.height;
  }
  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape) {
  return shape.area;
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(10, 5);
console.log("Area of Circle: " + calculateTotalArea(circle));
console.log("Area of Rectangle: " + calculateTotalArea(rectangle));
