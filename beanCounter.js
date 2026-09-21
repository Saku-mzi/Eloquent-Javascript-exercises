function countBs(string) {
  return countChar(string, "B");
}
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countBs("Bollistic Bombs go Brazy"));
console.log(countChar("Lost ALL my bones", "l"));
