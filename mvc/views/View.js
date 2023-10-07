class View {
  static show(vehicles) {
    console.log("Vehicles list: ");
    vehicles.forEach((vehicle) => {
      const { id, name, type } = vehicle;
      console.log(`${id}. ${name} - ${type}`);
    });
  }
  static message(msg) {
    console.log(`${msg}`);
  }
}

module.exports = View;
