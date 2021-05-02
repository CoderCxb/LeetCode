// 224. 基本计算器

// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 输入：s = "1 + 1"
// 输出：2
// 示例 2：

// 输入：s = "(1+(4+5+2)-3)+(6+8)"
// 输出：23

// 思路比较简单，主要是通过判断字符，进行不同的处理而已
// 要点处理(难):
// 1. 符号需要使用[]存储,否则 ()的存在，会导致计算的先后顺序发生改变
// 2. 碰到+-,设置当前符号(sign) 
// 3. 碰到(,则将当前符号添加到符号数组  碰到),则将符号数组最后一个元素删除
// 4. 碰到数字字符时,使用while向后循环至非数字字符为止,可以获取到连续的数字字符串用于计算

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // 1. 初始化 ops为符号数组 sign为当前符号 +1 或 -1
  let result=0,ops =[1],nums='0123456789',sign=1;
  let len=s.length,index=0;
  // 2. 循环
  while(index<len){
    // 3. 跳过空字符
    if(s[index]==' '){index++;}
    // 4. 如果当前字符为+ 则设置当前符号为 1
    else if(s[index]=="+"){
      sign=ops[ops.length-1];
      index++;
    }
    // 5. 如果当前字符为- 则设置当前符号为 -1
    else if(s[index]=='-'){
      sign=-ops[ops.length-1];
      index++;
    }
    // 6. 删除符号数组最后一个符号
    else if(s[index]==')'){
      ops.pop();
      index++;
    }
    // 7. 将当前符号添加到符号数组 
    else if(s[index]=='('){
      ops.push(sign);
      index++;
    // 8. 计算
    }else{
      // 9. 初始化数字字符串
      let numStr='';
      // 10. 当是数字字符时不断拼接
      while(nums.indexOf(s[index])!==-1){
        numStr+=s[index];
        index++;
      }
      // 11. 计算结果
      result+=+numStr*sign;
    }
  }
  // 12. 返回结果
  return result;
};

console.log(calculate("(1+(4+5+2)-(3+1))+(6+8)"));