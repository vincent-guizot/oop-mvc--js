const fs = require("fs");

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

  static create(params) {
    const [name, type] = params;
    let vehicles = this.getVehicles();
    let id = vehicles[vehicles.length - 1].id + 1;

    vehicles.push(new Vehicle(id, name, type));
    this.save(vehicles);
    return `"${name}" has been created.`;
  }

  static delete(params) {
    let vehicles = this.getVehicles();
    let id = Number(params[0]);
    vehicles = vehicles.filter((vehicle) => vehicle.id !== id);

    this.save(vehicles);
    return `Vehicle id ${id} has been deleted.`;
  }

  static update(params) {
    let vehicles = this.getVehicles();
    const [id, name, type] = params;
    vehicles = vehicles.map((vehicle) => {
      if (vehicle.id === Number(id)) {
        vehicle.name = name;
        vehicle.type = type;
      }
      return vehicle;
    });

    this.save(vehicles);
    return `Vehicle id ${id} has been updated`;
  }
  static save(vehicles) {
    let vehiclesString = JSON.stringify(vehicles, null, 3);
    fs.writeFileSync("./data.json", vehiclesString);
  }
}

module.exports = Vehicle;
