class Group {
  #amalobolo = [];

  add(value) {
    if (!this.has(value)) {
      this.#amalobolo.push(value);
    }
  }

  delete(value) {
    this.#amalobolo = this.#amalobolo.filter((ye) => ye !== value);
  }

  has(value) {
    return this.#amalobolo.includes(value);
  }

  static from(collection) {
    const group = new Group();
    for (const value of collection) {
      group.add(value);
    }
    return group;
  }
}

const group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
