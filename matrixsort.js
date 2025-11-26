const numbers = [
  [45,16,57],
  [43,55,56],
  [74,18,91],
];


for (let stas = 0; stas < numbers.length; stas++) {
  for (let start = 0; start < numbers[stas].length; start++) {

    console.log(`${stas + 1} ${start + 1} = ${numbers[stas][start]}`);
  }
}


for (let i = 0; i < numbers.length; i++) {
  numbers[i].sort((a, b) => a - b);
}

console.log("Після сортування:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
