// hemos creado un tipo operations(custom)
type Operations = 'add' | 'multiply' | 'divide' ;
// al parametro op le hecho dicho que es del tipo operations por lo que solo podrá recibir uno de esos 3 valores
type Result =  number;
const calculator = (c:number, d:number, op:Operations):Result => {
    switch (op) {
        case 'add':
            return c + d;
        case 'multiply':
           return c * d ;
        case 'divide' :
            if(d === 0) throw new Error('can\'t divide by 0');
            return c / d;
        default:
            break;
    }
}

console.log(process.argv);

const c:number = Number(process.argv[2]);
const d:number = Number(process.argv[3]);