// 解题思路:
// 将数组映射到一个新的数组上(也可以隐射到map) 视情况而定
// index为原数组的值 而值是原数组的index 即和原数组反向
// 然后循环原数组 找到target-x这个下标的元素 如果不为空 就说明存在
var twoSum = function(nums, target) {
  let result=[];
  let obj={};
  nums.map((item,index)=>{
    if(item in obj) result=[index,obj[item]];
    else obj[target-item]=index;
  })
  return result;
};

console.log(twoSum([2,7,11,15],9));