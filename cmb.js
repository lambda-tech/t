var mm = 0;
var cmb = function() {
  var memo = [];
  var f = function(n, m) {
    if (n == 0) {
      if (m == 0) {
        return 1;
      }
      else return 0;
    }
    else {
      if (m < 0 || m > n) return 0;
      if (m == 0 || m == n) return 1;
      var ans = memo[n+","+m];
      console.log("ans["+n+","+m+"]="+ans);
      if (typeof ans == "number") return ans;
      mm += 1;
      ans = f(n - 1, m - 1) + f(n - 1, m)
      memo[n+","+m] = ans;
      console.log(memo);
      return ans;
    }
  }
  return f;
}();

for (var j = 0; j <= 4; j++) {
  console.log("-----");
  a = []
  for (var i = 0; i <= j; i++) a.push(cmb(j, i));
  console.log("*"+a);
}
module.exports = cmb;
console.log(mm);
