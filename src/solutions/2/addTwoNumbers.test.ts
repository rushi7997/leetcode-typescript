import addTwoNumbers, {ListNode} from './add-two-numbers';

test('Solution 2 - add two numbers', () => {
    expect(
        new ListNode(7).val
    ).toEqual(7);
    expect(
        addTwoNumbers(
            new ListNode(2, new ListNode(4, new ListNode(3))),
            new ListNode(5, new ListNode(6, new ListNode(4)))
        )
    ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
    expect(
        addTwoNumbers(
            new ListNode(5),
            new ListNode(5)
        )
    ).toEqual(new ListNode(0, new ListNode(1)));
});
