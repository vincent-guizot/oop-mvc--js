const command = process.argv[2];
const params = process.argv.slice(3);
const VehicleController = require('./controllers/VehicleController');

switch (command) {
  case "show":
    // console.log("Show masuk");
    VehicleController.show()
    break;
  case "create":
    // console.log("Create masuk");
    VehicleController.create(params)
    break;
  case "delete":
    VehicleController.delete(params)
    break;
  case "update":
    VehicleController.update(params)
    break;
  default:
    VehicleController.message("Unknown command");
}

