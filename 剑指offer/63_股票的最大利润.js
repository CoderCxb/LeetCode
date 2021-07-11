// 63. 股票的最大利润
// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

// 思路:循环遍历，记录到当天的最低价,并根据最低价去计算利润

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// 1. 初始化最低价
	let lowestPrice = Number.MAX_SAFE_INTEGER;
	// 2. 初始化利润
	let maxProfit = 0;
	// 3. 遍历
	for (let index = 0; index < prices.length; index++) {
		let price = prices[index];
		// 4. 如果价格低于最低价 则更改最低价
		if (price < lowestPrice) {
			lowestPrice = price;
		}
		// 5. 计算利润 如果当天的利润大于利润 则更改利润
		maxProfit =Math.max(price - lowestPrice , maxProfit);
	}
	// 6. 返回利润
	return maxProfit > 0 ? maxProfit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
