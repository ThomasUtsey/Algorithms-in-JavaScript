isTriangle = (a, b, c) => {
  return a + b > c && a + c > b && c + b > a;
};

console.log(isTriangle(10, 5, 5));
