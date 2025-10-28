const numbers = [
  [45,16,57],
  [43,55,56],
  [74,18,91],
];

for (let maks = 0; maks < numbers.length; maks++) {
  for (let start = 0; start < numbers[maks].length; start++) {


    console.log(`${maks + 1} ${start + 1} = ${numbers[maks][start]}`);
  }
}
