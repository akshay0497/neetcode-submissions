class Solution {
    hasDuplicate(nums) {
        let uniqueArr = [];
        for (let i = 0; i < nums.length; i++) {
            let isDuplicate = false;
            for (let k = 0; k < uniqueArr.length; k++) {
                if (uniqueArr[k] === nums[i]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (isDuplicate) {
                return true;
            }
            uniqueArr.push(nums[i]);
        }
            return false;
    }
}
