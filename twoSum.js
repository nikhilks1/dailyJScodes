// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    let seen = {}; // Object to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (seen[complement] !== undefined) {
            return [seen[complement], i]; // Return indices if complement is found
        }

        seen[nums[i]] = i; // Store number and index
    }

    return [];
}
