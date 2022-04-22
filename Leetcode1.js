const functions = {
  twoSum: (nums, target) => {
    for (i = 0; i < nums.length; i++) {
      for (x = 1; x < nums.length; x++) {
        if (i == x) continue;
        if (nums[i] + nums[x] == target) return [nums[i], nums[x]];
      }
    }
    return "no two numbers equal target";
  },

  ///////////////////////////////////////////////////////////////////////////////

  findMedianSortedArrays: (nums1, nums2) => {
    let nums3 = nums1.concat(nums2);
    nums3 = new Float64Array(nums3);
    nums3 = nums3.sort();

    if (nums3.length == 2) {
      return (nums3[0] + nums3[1]) / 2;
    }
    let median = nums3.length / 2;

    if (nums3.length % 2 == 0) {
      return (nums3[median - 1] + nums3[median]) / 2;
    } else {
      median = Math.round(median);
      return nums3[median - 1];
    }
  },

  ///////////////////////////////////////////////////////////////////////////////

  strongPasswordChecker: (password) => {
    let output = 6;

    //check for min and max char count
    if (password.length >= 6 && password.length <= 20) output--;
    //check for number
    if (password.match(/\d+/g) != null) output--;
    //check for lower and upperCase latter
    if (password.toUpperCase() != password) output--;
    if (password.toLowerCase() != password) output--;
    //check for repeating numbers
    if (password.length > 3) {
      const passwordArry = password.split("");
      let pointer = 0;
      let isRepeating3Times = false;
      for (i = 0; i < passwordArry.length; i++) {
        for (x = i + 1; x <= passwordArry.length; x++) {
          if (i == x) continue;
          if (passwordArry[i] === passwordArry[x]) {
            pointer++;
            if (pointer == 2) {
              isRepeating3Times = true;
            }
          } else {
            pointer = 0;
          }
        }
      }
      if (isRepeating3Times == false) output -= 2;
    }
    return output;
  },

  ///////////////////////////////////////////////////////////////////////////////
};

module.exports = functions;
