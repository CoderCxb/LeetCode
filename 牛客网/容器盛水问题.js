// 容器盛水问题
// 给定一个整形数组arr，已知其中所有的值都是非负的，将这个数组看作一个容器，请返回容器能装多少水。
/**
 * @param {Array[number]} arr int整型一维数组 the array
 * @return {number} long长整型
 */
function maxWater(arr) {
  // 1. 长度不大于2的话 盛不了水
  if(arr.length<=2){
    return 0;
  }
  // 2. 初始化
  let result=0;
  let len=arr.length;
  let start=0,end=len-1;
  // 3. 左右最大值
  let lMax=arr[start];
  let rMax=arr[end];
  // 4. 循环遍历
  while(start<end){
    // 5. 更新左右最大值
    lMax=Math.max(lMax,arr[start]);
    rMax=Math.max(rMax,arr[end])
    // 6. 左右不断的内移 保留大值
    // 核心思想就是 当前能存多少水 取决于左右最大值中小的那个-当前高度
    if(arr[start]>=arr[end]){
      result+=Math.min(lMax,rMax)-arr[end];
      end--;
    }else{
      result+=Math.min(lMax,rMax)-arr[start];
      start++;
    }
  }
  return result;
}
console.log(maxWater([3,1,2,5,2,4]));