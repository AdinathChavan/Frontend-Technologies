let arr = [ 12,23,34,54,65,93];

 let ar  = arr.filter( (val)=> { return val%2==0});

 console.log(ar);

 ar.shift();
 ar.pop();
 ar.push(24);

 arr.length=3;

 console.log(ar);

 console.log("New array element .......");

 let nums = [1,2,3,4,5,6,7,8,9];

 nums.length=3;
 console.log(nums);