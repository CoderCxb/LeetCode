// 97. 交错字符串
// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

// 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 注意：a + b 意味着字符串 a 和 b 连接。

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  // let res = false;
  // if ((s1 + s2).length !== s3.length) return false;
  // function fn(ns1, ns2, ns3) {
  //   let indexS1 = 0;
  //   let indexS2 = 0;
  //   let indexS3 = 0;
  //   let res = true;
  //   while (s1[indexS1] === s3[indexS3] || s2[indexS2] === s3[indexS3]) {
  //     console.log(s1[indexS1], s2[indexS2], s3[indexS3]);
  //     // if(s1[indexS1] === s3[indexS3] && s2[indexS2] === s3[indexS3]){
  //     // }
  //     if (s1[indexS1] === s3[indexS3]) {
  //       indexS1++;
  //     }
  //     if (s2[indexS2] === s3[indexS3]) {
  //       indexS2++;
  //     } else {
  //       res = false;
  //       break;
  //     }
  //     indexS3++;
  //   }
  // }
  // console.log(s1[indexS1], s2[indexS2], s3[indexS3]);
  // // console.log(res, indexS3, s3.length - 1);
  // return res && indexS3 === s3.length;
};

console.log(isInterleave((s1 = "aabcc"), (s2 = "dbbca"), (s3 = "aadbbcbcac")));
// console.log(isInterleave((s1 = "aabcc"), (s2 = "dbbca"), (s3 = "aadbbbaccc")));
