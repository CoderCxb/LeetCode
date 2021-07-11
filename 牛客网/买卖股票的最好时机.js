// 63. 买卖股票的最好时机
// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

// 思路:循环遍历，记录到当天的最低价,并根据最低价去计算利润
function maxProfit( prices ) {
  let result=0;
  let minPrice=Number.MAX_SAFE_INTEGER;
  for(let price of prices){
      minPrice=Math.min(minPrice,price);
      result=Math.max(price-minPrice,result)
  }
  return result;
}

console.log(maxProfit([1,4,2]));