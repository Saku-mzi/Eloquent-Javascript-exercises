let size = prompt("pick a muber");
let board = "";
for (let setOne = 0; setOne < size; setOne++) {
  for (let setTwo = 0; setTwo < size; setTwo++) {
    if ((setOne + setTwo) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
