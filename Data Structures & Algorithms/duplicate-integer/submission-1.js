
class Solution {
    hasDuplicate(nums) {
        let uniqueSet = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (uniqueSet.has(nums[i])) {
                return true;
            }

            uniqueSet.add(nums[i]);
        }

        return false;
    }
}
