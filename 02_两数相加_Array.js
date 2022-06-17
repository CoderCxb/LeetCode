// 2. 两数相加(数组版)
// 给你两个 非空数组，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，

// 请你将两个数相加，并以相同形式返回一个表示和的数组。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

var addTwoNumbers = function (l1, l2) {
  l1 = l1.reverse();
  l2 = l2.reverse();
  let maxLen = Math.max(l1.length, l2.length);
  let result = [];
  let addOne = false;
  for (let index = 0; index < maxLen; index++) {
    let sum =
      (l1[index] !== undefined ? l1[index] : 0) +
      (l2[index] !== undefined ? l2[index] : 0) +
      (addOne ? 1 : 0);
    result.push(sum % 10);
    if (sum > 9) addOne = true;
    else addOne = false;
  }
  if (addOne) result.push(1);
  return result;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
