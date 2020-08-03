const data = [];

module.exports = class {
  constructor(message) {
    this.message = message;
  }
  save() {
    data.push(this.message);
  }
  static fetchAll() {
    return data;
  }
}