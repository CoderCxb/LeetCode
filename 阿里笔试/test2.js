/**
 * 假设你是一个专业的劫匪，你计划去打劫一条街上的家舍，每家有一定数量的钱财，
 * 但相邻两家有一个彼此连接的安全系统，一旦相邻两家在同一晚被打劫，那么这个安全系统就会自动报警。
 * 
 * 给你一个由非负整数组成的数组，用来代表每家的钱财，在不让安全系统自动报警的前提下，
 * 求你能打劫到的钱财的最大数量。
 * 
 * 比如 [2, 0, 0, 4, 5]，能打劫到的最大钱财是7
 */

function maxMoney(nums){
  let preIndex=0,preMax=0,maxMoney=0;
  if(nums.length===0) maxMoney = 0;
  if(nums.length===1) maxMoney = nums[0];
  if(nums.length===2) {
    preMax=nums[0];
    maxMoney = Math.max(nums[0],nums[1]);
  }
  for(let i=2;i<nums.length;i++){
      preMax=Math.max(preMax,nums[i-2]);
      maxMoney=Math.max(preMax+nums[i],maxMoney)
  }
return maxMoney;
}

console.log(maxMoney([5,0,5,0,5,1]));
