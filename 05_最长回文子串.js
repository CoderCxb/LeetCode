// 5. 最长回文子串
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩展法
// 思路就是 遍历每个元素 然后从该元素左右两侧作判断
// a) 左右相等直接添加 并且左右距离+1
// b) 左右不同判断目前字符串是否是一个纯字符串(只有一种元素) 是则添加 不是直接
var longestPalindrome = function (s) {
  let result='';
  for (let index = 0; index < s.length; index++) {
    let palindrome=s[index],pure=true,preDiff=1,nextDiff=1;    
    while(true){
      let next=s[index+nextDiff],pre=s[index-preDiff],now=s[index];
      if(next===pre&&next&&pre){
        palindrome=pre+palindrome+next;
        if(next!==now) pure=false;
        preDiff++;
        nextDiff++;
      }
      else{
        if(pre===now&&pure){
          palindrome=pre+now;
          preDiff++;
        }else if(now===next&&pure) {
          palindrome+=next;
          nextDiff++;
        }else{
          break;
        }
      }
      if((!next&&!pre)){
        break;
      }
    }
    if(palindrome.length>result.length) result=palindrome;
  }
  return result;
};

console.log(longestPalindrome("baba"));
