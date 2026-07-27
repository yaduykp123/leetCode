/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {

    let ans =[ ]

    for (i = 0; i < nums.length; i++) {
        ans.push(nums[i])

    }
    for(i=nums.length-1;i>=0;i--){
        ans.push(nums[i])
    }
    return ans
};