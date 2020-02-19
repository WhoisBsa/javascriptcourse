let num = [5, 8, 2, 9, 3];

console.log(`The array is ${num}\n`);

num[5] = 6;
num[3] = 4
num.push(7);

console.log(`The size of array is ${num.length}\n`);

console.log(`The array is ${num}\n`);

num.sort();
console.log(`The sorted array is ${num}\n`);

for (let index in num) {
  console.log(num[index]);
}

console.log('\nIndex of 5: ' + num.indexOf(5))