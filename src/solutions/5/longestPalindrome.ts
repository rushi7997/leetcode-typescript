const longestPalindrome = (s: string): string => {
    let max = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (s.slice(i, j).length > max && isPalindrome(s.slice(i, j))) {
                max = s.slice(i, j).length;
                res = s.slice(i, j);
            }
        }
    }
    return res;
};

const isPalindrome = (s: string): boolean => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

export default longestPalindrome;
