// 合并两个有序数组 同leetcode 88题
/**
 * 
 * @param A int整型一维数组 
 * @param B int整型一维数组 
 * @return void
 */
function merge( A, m, B, n ) {
  let maxIndex=m+n-1;
  m--;
  n--;
  while(m>=0||n>=0){
    if(m===-1){
      A[maxIndex--]=B[n--];
    }else if(n===-1){
      A[maxIndex--]=A[m--]
    }else if(A[m]>=B[n]){
      A[maxIndex--]=A[m--];
    }else{
      A[maxIndex--]=B[n--];
    }
  }
}

console.log(merge([],0,[2,3,4,6,8],5));