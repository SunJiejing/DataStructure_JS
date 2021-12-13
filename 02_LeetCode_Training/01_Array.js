
/* 217. 存在重复元素
给定一个整数数组，判断是否存在重复元素。
如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */

 /**
  * idea: using hash table
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate_1 = function(nums) {
    if(!nums || !nums.length) return false;
    var object = {};
    for(let i = 0; i < nums.length; i++){
        if(!object[nums[i]]){
            object[nums[i]] = true;
        }else{
            return true;
        }
    }
    return false;

};
var containsDuplicate_2 = function(nums) {
    var itemSet = new Set();
  for(const num of nums){
      if (itemSet.has(num)) {return true;}
      else itemSet.add(num);
  }
    return false;

};

var containsDuplicate_3 = function(nums) {
    nums.sort((a,b) =>a - b);
    const len = nums.length;
    for(let index = 0; index < len - 1; index++){
        if(nums[index] === nums[index + 1]){
            return true;
        }
    }
    return false;
    
}



