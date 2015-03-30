var B=require('mysql/node_modules/bignumber.js');
function fct(n) {
  if (n == 0) return 1;
  else
    return new B(n).times(fct(n - 1));
}
console.log(fct(1000).toString());
