// 数组中出现次数超过一半的数字
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。你可以假设数组是非空的，并且给定的数组总是存在多数元素。1<=数组长度<=50000

// 方法一：使用数组+hash的方式
function MoreThanHalfNum_Solution(numbers)
{
    let result;
    let maxTime=0;
    let hash={};
    for(let i=0;i<numbers.length;i++){
        let number=numbers[i];
        hash[number]=hash[number]===undefined?1:hash[number]+1;
    }
    for(let key in hash){
        if(hash[key]>maxTime){
            maxTime=hash[key];
            result=key;
        }
    }
    return result;
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));


//  方法二: 因为超过一半 那么中点必然是结果 所以排序之后返回结果也可以
function MoreThanHalfNum_Solution2(numbers){
  numbers.sort((a,b)=>a-b)
  return numbers[Math.floor(numbers.length/2)];
}

console.log(MoreThanHalfNum_Solution2([1,2,3,2,2,2,5,4,2]));