// 9. 回文整数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。


// 输入：-121      0      121
// 输出：false    true    true

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let result=true;
  let xStr=x.toString();
  if(x<0) return false;
  let start=0,end=xStr.length-1;
  while(true){
    if(xStr[end]!==xStr[start]||end===start||(xStr.length%2===0&&start+1===end)){
      if(xStr[end]!==xStr[start])result=false;
      break;
    }
    start++;
    end--;
  }
  return result;
};


console.log(isPalindrome(121));