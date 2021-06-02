// 155. 最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
 

// 示例:

// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// 输出：
// [null,null,null,null,-3,null,0,-2]

// 解释：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

/**
 * initialize your data structure here.
 */
// 例子
// [5,3,4,1,2] stack       
// [5,3,3,1,1] minStack 记录的是每个元素入栈时 栈中最小的元素 和stack是对应关系
var MinStack = function() {
  // 1.初始化栈和最小值栈(记录到当前位置的最小值) 由于题目规定 因此不考虑空栈情况
  this.stack=[];
  // 2. 最小值栈记录stack中每一个元素入栈时s的最小值
  this.minStatck=[Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  // 3. 入栈
  this.stack.push(val);
  // 4. minStack记录栈的最小值栈
  this.minStatck.push(Math.min(this.minStatck[this.minStatck.length-1],val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 5. 出栈 
  this.stack.pop();
  // 6. 最小值栈出栈(stack元素出栈,最小值栈对应的最小值也出栈)
  this.minStatck.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  // 7. 返回最后一个元素
  return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  // 8. 返回最小值栈的最后一个元素
  return this.minStatck[this.minStatck.length-1];
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());; 
minStack.pop();
minStack.top();    
console.log(minStack.getMin());;