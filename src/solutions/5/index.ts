import LongestPalindromicSubstring from './longestPalindrome';

const run = () => {
    const input = 'babad';
    console.log("Input: ", input);

    console.time('longestPalindrome');
    console.log("Output: ", LongestPalindromicSubstring(input));
    console.timeEnd('longestPalindrome');
}

export default run;
