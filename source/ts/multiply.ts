const parseArguments = (args) => {
    if(args.length > 4) throw new Error('Too much arguments');
    if(args.length < 4) throw new Error('not enought arguments');
    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            a : Number(args[2]),
            b: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const multiply = (a: number, b:number, printText: string) => {
    console.log(printText, a * b);
}

const {a , b } = parseArguments(process.argv);

multiply(a, b, `el resultado de multiplicar ${a} * ${b} es:`)