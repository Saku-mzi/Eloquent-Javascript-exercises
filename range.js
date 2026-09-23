function range(qalong, qetellong, setepisi = 1) {
  if (setepisi === 1 && qalong > qetellong) setepisi = -1;
  const array = [];
  for (
    let i = qalong;
    setepisi > 0 ? i <= qetellong : i >= qetellong;
    i += setepisi
  )
    array.push(i);
  return array;
}
console.log(range(5, 2, -1));

function sum(something) {
  let total = 0;

  for (let i = 0; i < something.length; i++) {
    total += something[i];
  }

  return total;
}

console.log(sum(range(5, 2, -1)));
