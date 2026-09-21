for (let dipalo = 1; dipalo <= 100; dipalo = dipalo + 1) {
  if ((dipalo % 3 === 0) & (dipalo % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (dipalo % 5 === 0) {
    console.log("Buzz");
  } else if (dipalo % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(dipalo);
  }
}
