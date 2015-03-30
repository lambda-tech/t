var B=require('big-number').n;
function fct(n) {
  if (n == 0) return 1;
  else return B(n).multiply(fct(n - 1));
}
console.log(fct(1000).toString());
