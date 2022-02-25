import convert from './convert';

const run = () => {
    const input : string = 'PAYPALISHIRING';
    const numRows : number = 3;
    const expectedOutput : string = 'PAHNAPLSIIGYIR';


    console.info("Input : ", input)
    console.info("Target: ", numRows)
    console.info("Expected Output: ", expectedOutput)
    console.log("=============================")
    console.time("execution")
    console.log("Output:::::", convert(input, numRows))
    console.timeEnd("execution")
}

export default run;
