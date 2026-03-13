/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = -1
    let result = -1
  
    for(i=0; i<nums.length; i++){
        if(nums[i] === target){
         
         if(res === -1){
            res = i
         }
         result = i
        }
        
    }

    return [res, result]
};