class Group {
  #amalobolo = [];

  add(value) {
    if (!this.has(value)) {
      this.#amalobolo.push(value);
    }
  }

  delete(value) {
    this.#amalobolo = this.#amalobolo.filter((v) => v !== value);
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

  [Symbol.iterator]() {
    return new GroupIterator(this.#amalobolo);
  }
}

class GroupIterator {
  #amalobolo;
  #position;

  constructor(amalobolo) {
    this.#amalobolo = amalobolo;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#amalobolo.length) {
      return { done: true };
    } else {
      const result = { value: this.#amalobolo[this.#position], done: false };
      this.#position++;
      return result;
    }
  }
}

for (const value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
