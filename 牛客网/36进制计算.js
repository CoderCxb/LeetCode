
/**
 * @param {string} num1 
 * @param {string} num2 
 */
function addNums(num1,num2){
  let result='';
  let numArr=[
    '0', '1', '2', '3', '4', '5', '6','7', '8', '9', 'a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y','z'
  ];
  let maxLen=Math.max(num1.length,num2.length);
  let up = 0; // 控制进位
  for (let index = maxLen-1; index >= 0 ; index--) {
    let n1=numArr.indexOf(num1[index]);
    let n2=numArr.indexOf(num2[index]);
    let sum=n1+n2+up;
    if(sum>=36){
      up=Math.floor(up/36)
    }
    result=numArr[sum%36]+result;
  }
  if(up>0){
    result=up+result;
  }
  return result;
}

console.log(addNums('51b','12x'));
// console.log(addNums('1b','2x'));