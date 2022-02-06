function factorial (n) {
  let r = 1;
  for (let i = 1; i <= n; i++) {
    r *= i;
  }
 return r;
}
let m = factorial(5);
