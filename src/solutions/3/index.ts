import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

const run = () => {
    const s = "abcabcbb";
    console.log("Input: ", s);

    console.time("lengthOfLongestSubstring");
    const result = lengthOfLongestSubstring(s);
    console.timeEnd("lengthOfLongestSubstring");
    console.log(result);
}

export default run;
