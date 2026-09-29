function reverseArray(array) {
  const something = [];
  for (let i = array.length - 1; i >= 0; i--) {
    something.push(array[i]);
  }
  return something;
}

function reverseArrayInPlace(array) {
  for (let left = 0; left < array.length / 2; left++) {
    const right = array.length - 1 - left;
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  return array;
}

const ori = ["yes1", "yes3", "yes2", "yes4", "yes5"];
const copy = reverseArray(ori);
const copyTwo = reverseArrayInPlace([...ori]);

console.log(ori);
console.log(copy);
console.log(copyTwo);
