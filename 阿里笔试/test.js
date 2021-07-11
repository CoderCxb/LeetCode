const QueryString = {
  parse: (str) => {
    let result={};
  	let splitArr1=str.split('&');
    for(let i=0;i<splitArr1.length;i++){
    	let [key,value]=splitArr1[i].split('=');
      	if(result[key]!=undefined){
        	if(result[key] instanceof Array){
            	result[key]=[...result[key],value];	
            }else{
            	result[key]=[result[key],value];
            }
        }else{
        	result[key]=value;
        }
    }
    return result;
  },
  stringify: (obj) => {
    let result='';
    for(let key in obj){
    	let value=obj[key];
      	if(value instanceof Array){
          	for(let item of value){
            	result+=`${key}=${item}&`;
            }
        }else{
        	result+=`${key}=${value}&`;
        }
    }
    return result.endsWith('&')?result.substr(0,result.length-1):result
  },
};

console.log(QueryString.parse('foo=bar&abc=&abc=123'));
console.log(QueryString.stringify({ foo: 'bar', abc: ['xyz', '123'], }));