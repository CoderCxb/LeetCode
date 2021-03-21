// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
*/
var isMatch = function(s, p) { 
  let sLen=s.length,pLen=p.length;
  let dp=new Array(pLen+1);
  for(let i=0;i<=pLen;i++){
    dp[i]=new Array(sLen+1).fill(false);
  }
  dp[0][0]=true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == "*") dp[j][0] = dp[j - 2][0];
  }
  console.log(dp);
  for (let si = 1; si < sLen+1; si++) {
    for (let pi = 1; pi < pLen+1; pi++) {
      if((s[si-1]===p[pi-1]||p[pi-1]==='.')){
        dp[pi][si]=dp[pi-1][si-1];
      }else if(p[pi-1]==='*'){
        if (s[si - 1] == p[pi - 2] || p[pi - 2] == ".") {
          dp[pi][si] = dp[pi - 2][si] || dp[pi - 2][si - 1] || dp[pi][si - 1];
        } else {
          dp[pi][si] = dp[pi - 2][si];
        }
      }
    }
  }
  return dp[pLen][sLen];
};


console.log(isMatch("aab","c*a*b*"));