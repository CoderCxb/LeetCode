// 剑指 Offer 09. 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
// 思路: 使用两个栈模拟队列，in栈默认存储，当要出栈的时候，将in栈反序push到out栈
// 这是 out栈pop的就是最早进来的数据 也就模拟出队列了。
var CQueue = function() {
  //  入栈
  this.in=[];
  // 出栈
  this.out=[];
};
// 入栈
/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.in.push(value)
};

// 出栈
/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  // 两个栈都是空的时候删除 返回-1
  if(this.in.length===0&&this.out.length===0){
    return -1;
  }else if(this.out.length===0){
    // 当 不断的将in往out中加
    // 这步其实相当于将in反转以后加入out
    // in=out.reverse();
    while(this.in.length){
      this.out.push(this.in.pop())
    }
  }
  // 返回out的最后一个元素
  return this.out.pop();
};

var obj = new CQueue()
console.log(obj.deleteHead());
obj.appendTail(5); 
obj.appendTail(2);
console.log(obj.deleteHead());
console.log(obj.deleteHead());;