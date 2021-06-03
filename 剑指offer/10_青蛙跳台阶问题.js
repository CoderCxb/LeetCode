// 剑指 Offer 10- II. 青蛙跳台阶问题
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let a=1,b=1;
  for(let i=0;i<n;i++){
    [a,b]=[b,a+b]
  }
  return a;
};

console.log(numWays(1));
console.log(numWays(2));
console.log(numWays(3));
console.log(numWays(44));