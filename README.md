# TypeScript

Documentación Oficial: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
Status: Apuntes

# 1. Antecedentes e introducción

TypeScript es una super-conjunto tipado de Javascript, que finalmente, se compila en código JS simple. Se puede elegir incluso la versión de JS generado siempre que sea ECMAScript 3 o más reciente.

TS consta de 3 partes pero que se complementan mutuamente:

- El lenguaje
- El compilador
- El servicio de lenguajes

![Captura de pantalla 2023-01-23 a las 9.52.41.png](/sources/images//Captura_de_pantalla_2023-01-23_a_las_9.52.41.png)

**El lenguaje** hace referencia a la *sintaxis*, palabras clave y algunas anotaciones. Es similar a Js pero no igual.

**El compilador** encargado de transformar el código generado en TS en un formato legible por máquina. El término específico sería *transpilar*, pero el más utilizado por la comunidad ha sido *compilar*, por lo que seguiremos usándolo. El compilador también realiza análisis de código, advirtiendo de errores si encuentra algo.

**El servicio de lenguaje** recopila información de tipo del código fuente. Las herramientas de DEV pueden usar esa información para proporcionar sugerencias de tipo y posibles alternativas de refactorización.

## Características clave del lenguaje

### Anotaciones de tipo

Las anotaciones de tipo son una forma de registrar / establecer un contrato previsto a una función o variable.

```jsx
const birthdayGreeter = (name: string, age: number): string => {
  return `Happy birthday ${name}, you are now ${age} years old!`;
};

const birthdayHero = "Jane User";
const age = 22;

console.log(birthdayGreeter(birthdayHero, 22));
```

La función `birthdayGreeter` que retorna una `string` acepta dos argumentos, `name and age`, uno de tipo `string` y otro de tipo `number`.

### Inferencia de tipos

El compilador de TS puede intentar inferir la información del tipo si no se ha especificado ninguno, basándose en los tipos de los valores que se asigna y su uso. 

```jsx
const add = (a: number, b: number) => {
  /* The return value is used to determine
     the return type of the function */
  return a + b;
}
```

### Borrado de tipos

Ts elimina todas las construcciones del sistema de tipos durante la compilación

**Entrada:**

```jsx
**let x: SomeType;**
```

**Salida:**

```jsx
**let x;**
```

## ¿Por qué es beneficioso usar TypeScript?

En primer lugar ofrece verificación de tipos análisis de código estático. Podemos requerir que ciertos valores sean de un tipo concreto advirtiéndonos de un uso incorrecto. Reduciendo el tiempo de ejecución y el número de pruebas unitarias requeridas en un proyecto. TS no solo advierte de un mal uso de tipos si no también otros errores como escribir mal el nombre de una variable o función o su scope.

En segundo lugar, la declaración de tipos puede servir como documentación entre desarrolladores donde podrán ver que tipo de datos necesita x función y que tipo de valor devolverá.

# 2. Primeros pasos con TypeScript

## Configurando el entorno

Es recomendable instalar para nuestro IDE concretamente para Visual Studio Code la siguiente extensión, [typescript hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero).

Como hemos mencionado anteriormente Ts no es ejecutable por sí mismo, primero debe ser compilado en JS. En un entorno de producción el código de TS se compila a JS en una carpeta separada desde donde se ejecuta. En desarrollo a menudo es más útil hacer uso de la compilación en tiempo real para poder ver los cambios más rápido.

Para ello instalamos tanto *ts-node* como el paquete oficial de *typescript.* 

```
**npm install -g ts-node typescript**
```

Si no queremos hacerlo de forma global, podemos crear un proyecto con npm e instalarlo como dependencias. Para ello, dentro de la carpeta de nuestro proyecto ejecutamos `npm init` y después el siguiente comando para concluir la instalación.

```
**npm install --save-dev ts-node typescript**
```

Ahora dentro del package.json configuramos el comando para ejecutar la compilación.

```json
{
  // ..
  "scripts": {
    "ts-node": "ts-node"  },
  // ..
}
```

Para usar ts-node y poder compilar, dentro de nuestra carpeta ejecutamos el siguiente comando. Tener en cuenta que estamos utilizando ts-node desde el package.json, todos los argumentos de la línea de comandos para el script deben tener el prefijo *--*.

```json
**npm run ts-node -- file.ts**
```

## Creando primeros tipos

Vamos a crear una función de multiplicar. Para ello lo primero, será declararla como si fuera JS, después añadimos los tipos.

```jsx
const multiplicar = (a, b, printText) => {
	console.log(printText, a * b);

multiplicar(3, 4, 'el resultado de multiplicar es:') 
// el resultado de multiplicar es: 12
```

```jsx
const multiplicar = (a: number, b: number, printText: string) => {
	console.log(printText, a * b);

multiplicar(3, 4, 'el resultado de multiplicar es:') 
// el resultado de multiplicar es: 12
```

Hemos declarado que el parámetro `a` y `b` son del tipo `number` y que `printText` es de tipo `string`. Por tanto si intentamos pasarle los siguiente argumentos, nos devolverá un error. 

```jsx
multiplicar('test', 4 'el resultado de multiplicar es:');
// Argument 'test' is not assignable to parameter of type 'number'
```