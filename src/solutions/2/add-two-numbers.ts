export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let carry = 0
    let result = new ListNode(0)
    let current = result
    while (l1 || l2 || carry) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
    }
    return result.next
};

export default addTwoNumbers
