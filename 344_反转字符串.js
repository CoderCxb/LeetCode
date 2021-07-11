// 344. 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

// 题目要求原地修改,使用双指针,头尾不断交换,start++,end-- 即可

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 1. 长度<2直接返回 不修改
  if(s.length<2) return;
  // 2. 初始化双指针
  let start=0,end=s.length-1;
  // 3. 遍历
  while(start<=end){
    // 4. 以解构赋值的形式交换元素
    [s[start],s[end]]=[s[end],s[start]];
    // 5. 头尾指针移动
    start++;
    end--;
  }
};

console.log(reverseString(["h","e","l","l","o"]));