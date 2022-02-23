const lengthOfLongestSubstring = (s: string): number => {
    const set = new Set<string>();
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (set.has(char)) {
            max = Math.max(max, i - start);
            while (s[start] !== char) {
                set.delete(s[start]);
                start++;
            }
            start++;
        } else {
            set.add(char);
        }
    }
    max = Math.max(max, s.length - start);
    return max;
}

export default lengthOfLongestSubstring;
