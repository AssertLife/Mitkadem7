async function demo() {
  console.log(1);

  await Promise.resolve();
  console.log(2);

  await Promise.resolve();
  console.log(3);
}

console.log(4);
demo();
console.log(5);
