// 69. x 的平方根
// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 二分查找的方式

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 1. 特殊情况处理
  if(x<=1) return x;
  // 2. 初始化左右指针
  let start=1,end=Math.ceil(x/2);
  // 3. 循环条件
  while(start<end){
    // 4. 获取中点
    let mid=Math.ceil(start+(end-start+1)/2);
    // 5. 判断要左区间还是右区间
    if(mid>x/mid){
      end=mid-1
    }else{
      start=mid;
    }
  }
  // 6. 返回结果
  return start;
};

console.log(mySqrt(100));