/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

 

 for(i = 0;i<=nums.length-1;i++){
    for(j=i+1;j<=nums.length-1;j++){
        if(nums[i] === nums[j]){
            nums.splice(i,1)
            j--
        }
    }
 }

    return nums.length;
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))