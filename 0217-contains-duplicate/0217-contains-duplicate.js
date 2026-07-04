/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const data = new Set()

    for(const item of nums){

        if(data.has(item)){
            return true;
        }
        data.add(item)
    }
    return false;
}