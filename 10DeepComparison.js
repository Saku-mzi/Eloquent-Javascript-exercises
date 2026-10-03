function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a !== "object" || b == null || typeof b !== "object")
    return false;

  const binne = Object.keys(a);
  const buite = Object.keys(b);
  if (binne.length !== buite.length) return false;

  for (let key of binne) {
    if (!buite.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
