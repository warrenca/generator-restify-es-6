module.exports = class staticNameFinderService {
  constructor() {
    this.names = ["Noah", "Liam", "Mason"];
    this.min = 0;
    this.max = this.names.length;
  }

  random () {
    var index = Math.floor(Math.random() * (this.max - this.min) + this.min);
    return this.names[index];
  }
};
