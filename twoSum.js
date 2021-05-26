// let nums = [3,2,4]
// let target = 6
// Output: [0,1]

//naive
/* method-1 linear O(n)^2*/

// const twosum=(arrayValue,targetValue)=>{
//   var start = window.performance.now();
// if(!Array.isArray(arrayValue) || isNaN(targetValue)){
//   return console.log("wrong input")
// }
// let foundIndex=[]
// arrayValue.map((data,index)=>{
//   let dataVal_1=data
//   let indexVal_1=index
//   arrayValue.map((data,index)=>{
//     if(dataVal_1 + data === targetValue && index > indexVal_1){
//       foundIndex.push(indexVal_1,index)
//     }
//   })


// })
// console.log(foundIndex)
// var end = window.performance.now();
// console.log(`start ${start}`,`end ${end}`)

// return foundIndex

// }
// twosum(nums,target)
// better

let nums = [2,7,6,3,11]
let target = 9
const betterway=(arrayValue,targetValue)=>{
let obj={}

arrayValue.forEach((item,index)=>{
obj[arrayValue[index]]=index
})

for(let i=0; i <= arrayValue.length; i++){
  let compliement=targetValue-arrayValue[i]
  return [obj[compliement],i]
}
//O(n)
}


// more optimized way
const moreOptimized=(arrayValue,targetValue)=>{
  let hashObj={}
  for(let i=0; i< 5; i++){
    let compliement=targetValue-arrayValue[i]
    if(hashObj[compliement] !== undefined){
      console.log([hashObj[compliement],i])
    }
      hashObj[arrayValue[i]]=i
  }
}
moreOptimized(nums,target)
