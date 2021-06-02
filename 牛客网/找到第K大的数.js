// 使用快排，排序完根据index取值
// ！ 注意: 是第K大的数,默认从小到大数，是第K小的数，因此需要倒着数
function findKth( a ,  n ,  K ) {
    console.log(a.length,n);
    function MySort( arr ) {
     if(arr.length<=1){
         return arr;
     }
     let smallers=[];
     let biggers=[];
     let centerIndex=Math.floor(arr.length/2);
     let center=arr[centerIndex];
     for(let i=0;i<arr.length;i++){
         if(i===centerIndex){
             continue
         }
         let value=arr[i];
         if(value<=center){
             smallers.push(value)
         }else{
             biggers.push(value)
         }
     }
     return MySort(smallers).concat([center]).concat(MySort(biggers));
   }
       let sortArr=MySort(a);
       console.log(sortArr);
       return sortArr[n-K]
   }


   console.log(findKth([1332802,1177178,1514891,871248,753214,123866,1615405,328656,1540395,968891,1884022,252932,1034406,1455178,821713,486232,860175,1896237,852300,566715,1285209,1845742,883142,259266,520911,1844960,218188,1528217,332380,261485,1111670,16920,1249664,1199799,1959818,1546744,1904944,51047,1176397,190970,48715,349690,673887,1648782,1010556,1165786,937247,986578,798663],49,24));