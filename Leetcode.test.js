const functions = require("./Leetcode1");

test("sum of two number from an array to reach a target value", () => {
  expect(functions.twoSum([2, 7, 11, 15], 13)).toStrictEqual([2, 11]);
});

test("sum of two number from an array to reach a target value", () => {
  expect(functions.twoSum([1, 10, 50, 72], 146)).toStrictEqual(
    "no two numbers equal target"
  );
});

///////////////////////////////////////////////////////////////////////////////

test("Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.", () => {
  expect(functions.findMedianSortedArrays([1, 3], [2, 4])).toStrictEqual(2.5);
});

test("Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.", () => {
  expect(functions.findMedianSortedArrays([1, 3], [2])).toStrictEqual(2);
});

test("Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.", () => {
  expect(
    functions.findMedianSortedArrays([], [1, 2, 3, 4, 5, 6])
  ).toStrictEqual(3.5);
});

test("Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.", () => {
  expect(functions.findMedianSortedArrays([3], [-2, -1])).toStrictEqual(-1);
});

///////////////////////////////////////////////////////////////////////////////

//has a lowerCase letter
test("Strong Password Checker", () => {
  expect(functions.strongPasswordChecker("a")).toStrictEqual(5);
});

//has lowerCase letter, has UpperCase letter, has a number
test("Strong Password Checker", () => {
  expect(functions.strongPasswordChecker("aA1")).toStrictEqual(3);
});

test("Strong Password Checker", () => {
  expect(functions.strongPasswordChecker("ca1GGGa")).toStrictEqual(2);
});

test("Strong Password Checker", () => {
  expect(functions.strongPasswordChecker("1337C0d3")).toStrictEqual(0);
});

///////////////////////////////////////////////////////////////////////////////
