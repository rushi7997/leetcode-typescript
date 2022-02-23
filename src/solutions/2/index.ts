import addTwoNumbers, {ListNode} from './add-two-numbers';

const run = () => {
    const input1: ListNode | null = new ListNode(2, new ListNode(4, new ListNode(3)));
    const input2: ListNode | null = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expectedOutput: ListNode | null = new ListNode(7, new ListNode(0, new ListNode(8)));

    console.info("Input 1: ", input1);
    console.info("Input 2: ", input2);
    console.info("Expected Output: ", expectedOutput);
    console.log("=============================");
    console.time("execution");
    console.log("Output:::::", addTwoNumbers(input1, input2));
    console.timeEnd("execution");
}

export default run;
