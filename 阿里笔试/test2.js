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

console.log(maxMoney([0,0,1,5,1,1]));
