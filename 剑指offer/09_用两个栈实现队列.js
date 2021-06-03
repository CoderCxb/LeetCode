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