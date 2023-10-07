const Vehicle = require("../models/Vehicle");
const View = require("../views/View");

class VehicleController {
  static show() {
    let vehicles = Vehicle.getVehicles();
    View.show(vehicles);
  }
  static create(params) {
    let feedback = Vehicle.create(params);
    View.message(feedback);
  }
  static update(params) {
    let feedback = Vehicle.update(params);
    View.message(feedback);
  }
  static delete(params) {
    let feedback = Vehicle.delete(params);
    View.message(feedback);
  }
  static message(msg) {
    View.message(msg);
  }
}

module.exports = VehicleController;
