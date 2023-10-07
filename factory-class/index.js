class Fruit {
  constructor(id, name, type, price, stock, brand) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.stock = stock;
    this.brand = brand;
  }
}

class Apple extends Fruit {
  constructor(id, name, price, stock, brand) {
    super(id, name, "Apple", price, stock, brand);
  }
}

class Orange extends Fruit {
  constructor(id, name, price, stock, brand) {
    super(id, name, "Orange", price, stock, brand);
  }
}

class Grape extends Fruit {
  constructor(id, name, price, stock, brand) {
    super(id, name, "Grape", price, stock, brand);
  }
}

// Factory Class
class FruitStore {
  constructor(box) {
    this.box = box || [];
  }
  showFruits() {
    // menampilkan fruits dari dalam this.box
    console.log("################################");
    console.log("# Welcome, this is our fruits: #");
    console.log("################################");
    if (this.box.length > 0) {
      //   console.log("Ada buah");
      this.box.forEach((fruit) => {
        const { id, name, type, price, stock, brand } = fruit;
        console.log(`${id}. ${name} - ${brand}, Rp, ${price}.`);
        console.log(`Stocks: ${stock} pcs. Type: ${type}`);
        console.log("-----------------------------------------");
      });
    } else {
      console.log("There is no fruits here.");
    }
  }
  addFruit(name, type, price, stock, brand) {
    // menambahkan fruits ke dalam this.box

    let tempFruit;
    let id;
    if (this.box.length === 0) {
      id = 1;
    } else {
      id = this.box[this.box.length - 1].id + 1;
    }
    switch (type) {
      case "apple":
        tempFruit = new Apple(id, name, price, stock, brand);
        break;
      case "orange":
        tempFruit = new Orange(id, name, price, stock, brand);
        break;
      case "grape":
        tempFruit = new Grape(id, name, price, stock, brand);
        break;
    }

    this.box.push(tempFruit);
    console.log(`"${name}" has been added to the box.`);
  }
  sellFruit(id) {
    // menghapus fruits berdasarkan id dari dalam this.box

    this.box = this.box.filter((fruit) => fruit.id !== id);

    console.log(`Fruit with id ${id} has been sold.`);
  }
  editFruit(id, name) {
    // mengubah fruits name berdasarkan id dari dalam this.box

    this.box = this.box.map((fruit) => {
      if (fruit.id === id) {
        fruit.name = name;
      }
      return fruit;
    });

    console.log(`Fruit with id ${id} has been edited.`);
    1;
  }
}

// Factory Class

const fruitStore = new FruitStore();

fruitStore.addFruit("Envy USA", "apple", 15000, 10, "sun-apple");
fruitStore.addFruit("Pokan Sweet", "orange", 12500, 5, "pokan");
fruitStore.addFruit("Midgnight grape", "grape", 12500, 5, "midnight");
fruitStore.sellFruit(3);
fruitStore.editFruit(1, "Sweet Envy");
fruitStore.showFruits();
