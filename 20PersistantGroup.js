class PGroup {
  constructor(amalobolo) {
    this.amalobolo = amalobolo;
  }

  has(value) {
    return this.amalobolo.includes(value);
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.amalobolo.concat(value));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.amalobolo.filter((v) => v !== value));
  }
}

PGroup.empty = new PGroup([]);

const a = PGroup.empty.add("a");
const ab = a.add("b");
const b = ab.delete("a");
console.log(PGroup.empty.has("a"));
console.log(ab.has("a"));
console.log(ab.has("b"));
console.log(b.has("b"));
console.log(b.has("a"));
console.log(PGroup.empty.has("a"));
