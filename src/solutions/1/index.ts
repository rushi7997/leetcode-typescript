import twoSum from './twoSum';

const run = () => {
    const input : number[] = [2,7,11,15];
    const target : number = 9;
    const expectedOutput : number[] = [0,1];


    console.info("Input : ", input)
    console.info("Target: ", target)
    console.info("Expected Output: ", expectedOutput)
    console.log("=============================")
    console.time("execution")
    console.log("Output:::::", twoSum(input, target))
    console.timeEnd("execution")
}

export default run;
