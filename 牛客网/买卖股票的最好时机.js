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