const fs = require("fs");
// fs file system => package dari node.js utk mengambil atau menulis file

class Vehicle {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
  static getVehicles() {
    let vehicles = fs.readFileSync("./data.json", "utf8");
    vehicles = JSON.parse(vehicles);
    vehicles = vehicles.map((vehicle) => {
      const { id, name, type } = vehicle;
      return new Vehicle(id, name, type);
    });
    return vehicles;
  }
  static showVehicles() {
    let vehicles = this.getVehicles();
    console.log("Vehicles list: ");
    vehicles.forEach((vehicle) => {
      const { id, name, type } = vehicle;
      console.log(`${id}. ${name} - ${type}`);
    });
  }
  static createVehicle(name, type) {
    let vehicles = this.getVehicles();
    let id = vehicles[vehicles.length - 1].id + 1;

    vehicles.push(new Vehicle(id, name, type));
    this.save(vehicles);
    console.log(`"${name}" has been created.`);
  }

  static deleteVehicle(id) {
    let vehicles = this.getVehicles();

    vehicles = vehicles.filter((vehicle) => vehicle.id !== id);

    this.save(vehicles);
    console.log(`Vehicle id ${id} has been deleted.`);
  }

  static updateVehicle(id, name, type) {
    let vehicles = this.getVehicles();

    vehicles = vehicles.map((vehicle) => {
      if (vehicle.id === id) {
        vehicle.name = name;
        vehicle.type = type;
      }
      return vehicle;
    });

    this.save(vehicles);
    console.log(`Vehicle id ${id} has been updated`);
  }
  static save(vehicles) {
    let vehiclesString = JSON.stringify(vehicles, null, 3);
    fs.writeFileSync("./data.json", vehiclesString);
  }
}

// Vehicle.createVehicle("Honda Brio", "sedan");
Vehicle.deleteVehicle(3);
Vehicle.updateVehicle(5, "Brio All new", "lcgc");
Vehicle.showVehicles();
