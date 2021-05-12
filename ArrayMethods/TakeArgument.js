let sum = () => {
  let array = [...args];
  return array.reduce((acc, el) => acc + el);
};

console.log(sum(1, 3, 4));
