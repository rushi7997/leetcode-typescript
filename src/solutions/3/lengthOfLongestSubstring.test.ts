import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

test('Solution 3 - Length of Longest Common Substring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
})
