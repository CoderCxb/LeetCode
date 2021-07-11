function compareVersion(a, b) {
  let aArr=a.split('.');
  let bArr=b.split('.');
  for(let i = 0; i< aArr.length;i++){
  	if(+aArr[i]>+bArr[i]){
    	return 1;
    }else if(+aArr[i]<+bArr[i]){
    	return -1;
    }
  }
  if(bArr.length>aArr.length&&bArr[aArr.length]===0){
  	return -1;
  }
  return 0;
}

console.log(compareVersion('0.1', '1.1.1'));; // 返回-1
console.log(compareVersion('13.37', '1.2 '));; // 返回1
console.log(compareVersion('1.1', '1.1.0'));; // 返回0