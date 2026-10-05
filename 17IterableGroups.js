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
  amalobolo;
  andazi;

  constructor(amalobolo) {
    this.amalobolo = amalobolo;
    this.andazi = 0;
  }

  next() {
    if (this.andazi >= this.amalobolo.length) {
      return { done: true };
    } else {
      const result = { value: this.amalobolo[this.andazi], done: false };
      this.andazi++;
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
