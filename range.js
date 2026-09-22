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
console.log(range(0, 100, 5));
