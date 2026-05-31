setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => {
  console.log(2);

  setTimeout(() => console.log(3), 0);

  Promise.resolve().then(() => {
    console.log(4);
  });
});
