function sum(array) {
  const temp = [...array];

  return temp.reduce((pre, cur) => pre + cur, 0);
}

export default sum;
