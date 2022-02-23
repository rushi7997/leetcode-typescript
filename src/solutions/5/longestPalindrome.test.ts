import longestPalindrome from "./longestPalindrome";

test('Solution 5 - Longest Palindrome', () => {
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('abcdefgfedcba')).toBe('abcdefgfedcba');
})
