/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let k = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + k;

        if (j >= nums.length) {
            k = 1;
            continue;
        }

        if (nums[i] + nums[j] === target) {
            return [i, j];
        } else {
            i--;
            k++;
        }
    }
};