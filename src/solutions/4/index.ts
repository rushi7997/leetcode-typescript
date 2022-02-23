import findMedianSortedArrays from "./findMedianSortedArrays";

const run = () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    console.log("Input: ", nums1, nums2);
    console.log('=============================');

    console.time("findMedianSortedArrays");
    console.log(findMedianSortedArrays(nums1, nums2));
    console.timeEnd("findMedianSortedArrays");
}

export default run;
