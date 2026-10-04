function dominantDirection(text) {
  const letter = /\p{L}/u;
  const rtlScript = /[\p{Script=Arabic}\p{Script=Hebrew}]/u;

  let ltr = 0;
  let rtl = 0;

  for (const char of text) {
    if (!letter.test(char)) continue;
    if (rtlScript.test(char)) {
      rtl++;
    } else {
      ltr++;
    }
  }

  return rtl > ltr ? "rtl" : "ltr";
}

console.log(dominantDirection("Hello!")); // ltr
console.log(dominantDirection("Hey, مساء الخير")); // rtl
