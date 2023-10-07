// INHERITANCE

class Fruit {
    constructor(name, type, price, stock, brand) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.stock = stock;
      this.brand = brand;
    }
  }
  
  class Apple extends Fruit {
    constructor(name, price, stock, brand) {
      super(name, "Apple", price, stock, brand);
    }
  }
  
  class Orange extends Fruit {
    constructor(name, price, stock, brand) {
      super(name, "Orange", price, stock, brand);
    }
  }
  
  class Grape extends Fruit {
    constructor(name, price, stock, brand) {
      super(name, "Grape", price, stock, brand);
    }
  }
  
  const apple = new Apple("Envy USA", "apple", 15000, 10, "sun-apple");
  const orange = new Orange("Pokan Sweet", "orange", 12500, 5, "pokan");
  const grape = new Grape("Midnight Purple", "grape", 50000, 5, "midnight");
  
  console.log(apple);
  console.log(orange);
  console.log(grape);