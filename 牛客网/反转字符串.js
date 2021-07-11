// 反转字符串

// 写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）

function solve( str ) {
  // return str.split('').reverse().join('');
  let result='';
  for (let index = str.length-1; index>=0; index++) {
    result+=str[index];
  }
  return result;
}