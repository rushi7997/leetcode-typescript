import convert from "./convert";

test('Solution 6: Zigzag Convert', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    expect(convert('PAYPALISHIRING', 5)).toBe('PHASIYIRPLIGAN');
})
