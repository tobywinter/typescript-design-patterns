// a Product class with string id, number price, and string description. also has display method returning void

class Product {
  id: string;
  price: number;
  description: string;

  constructor(id: string, price: number, description: string) {
    this.id = id;
    this.price = price;
    this.description = description;
  }
  display(): void {
    console.log("Product ID: " + this.id);
    console.log("Product Price: " + this.price);
    console.log("Product Description: " + this.description);
  }
}

// Book class which inherits from Product class and has string author. and string title.

class Book extends Product {
  author: string;
  title: string;

  constructor(
    id: string,
    price: number,
    description: string,
    author: string,
    title: string
  ) {
    super(id, price, description);
    this.author = author;
    this.title = title;
  }

  display(): void {
    super.display();
    console.log("Book Author: " + this.author);
    console.log("Book Title: " + this.title);
  }
}

class Electronic extends Product {
  brand: string;
  model: string;

  constructor(
    id: string,
    price: number,
    description: string,
    brand: string,
    model: string
  ) {
    super(id, price, description);

    this.brand = brand;
    this.model = model;
  }

  display(): void {
    super.display();
    console.log("Electronic Brand: " + this.brand);
    console.log("Electronic Model: " + this.model);
  }
}
