// Recuerda que lo que devuelve process.argv es un Array de Strings, tienes que pasarlo por Number(process.argv[]) para combertirlo en tipo number
const weigth:number = Number(process.argv[2]);
const height:number = Number(process.argv[3]);


function calculateIMC(weigth:number, height:number) :string{
    let result:number
    height = height / 100;
    result = weigth / (height * height);
    if (result < 18.5) return 'Bajo peso'
    else if (result >= 18.5 && result < 24.9) return 'Normal'
    else if (result >= 24.9 && result <= 29) return 'Sobrepeso'
    else return 'Obesidad'

    
} 

console.log(calculateIMC(weigth, height));