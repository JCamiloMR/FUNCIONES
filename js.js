// Arreglos
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [10, 20, 30, 40, 50];
const arreglo3 = ['a', 'b', 'c', 'd', 'e'];
const arreglo4 = [100, 200, 300, 400, 500];

// Métodos de los arreglos
// .reduce()
const reduce1 = arreglo1.reduce((acum, val) => acum + val, 0);
const reduce2 = arreglo2.reduce((acum, val) => acum + val, 0);
const reduce3 = arreglo3.reduce((acum, val) => acum + val, '');
const reduce4 = arreglo4.reduce((acum, val) => acum + val, 0);

console.log("Resultados reduce:", reduce1, reduce2, reduce3, reduce4);

// .filter()
const filter1 = arreglo1.filter(num => num > 2);
const filter2 = arreglo2.filter(num => num > 20);
const filter3 = arreglo3.filter(letra => letra !== 'c');
const filter4 = arreglo4.filter(num => num < 400);

console.log("Resultados filter:", filter1, filter2, filter3, filter4);

// .map()
const map1 = arreglo1.map(num => num * 2);
const map2 = arreglo2.map(num => num / 2);
const map3 = arreglo3.map(letra => letra.toUpperCase());
const map4 = arreglo4.map(num => num - 100);

console.log("Resultados map:", map1, map2, map3, map4);

// .forEach()
const forEach1 = arreglo1.forEach(num => console.log(num * 10));
const forEach2 = arreglo2.forEach(num => console.log(num / 10));
const forEach3 = arreglo3.forEach(letra => console.log(letra.repeat(3)));
const forEach4 = arreglo4.forEach(num => console.log(num + 1000));

// Funciones flecha
// Sin parámetros
const sinParametros = () => console.log("Esta es una función sin parámetros");

// Con un parámetro
const unParametro = nombre => console.log(`Hola, ${nombre}`);

// Con dos o más parámetros
const dosParametros = (num1, num2) => console.log(`La suma es: ${num1 + num2}`);

const variosParametros = (a, b, c) => console.log(`El resultado es: ${(a + b) * c}`);

const conRetorno = (x, y) => x * y;

// Llamadas a las funciones flecha
sinParametros();
unParametro("Juan");
dosParametros(3, 7);
variosParametros(2, 3, 4);
console.log(`Multiplicación con retorno: ${conRetorno(5, 6)}`);
