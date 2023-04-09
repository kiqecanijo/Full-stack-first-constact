//  1.- Create an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

const n: number = 5;
const array: number[] = Array.from({ length: n }, (_, x) => x);
console.log(array); 



//  using this previous method, generate an array of n numbers alternating them positive and negative starting with positive,
//  then save it in a new variable and sort it.
// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

const altArray = array
  .map((numero: number, y: number) => (y % 2 === 0 ? numero : -numero))
  .sort((a: number, b: number ) => a - b);
console.log(altArray)


// Consider the following code:


const CUSTOMERS = [
  {
    customer: "John",
    balance: 125,
    id: "0x0001",
  },
  {
    customer: "Jane",
    balance: 100,
    id: "0x0002",
  },
  {
    customer: "Jim",
    balance: 175,
    id: "0x0003",
  },
  {
    customer: "Jill",
    balance: 200,
    id: "0x0004",
  },
];



// create a function that receives a name of a customer, and returns the balance of that customer.
// if type of this function is not infered, type it.
// EXTRA: optimize this fucnction to decrease the time complexity.
// EXTRA 2 : optimize this function to be able to memorize the results of previous calls.
// i: getBalance('John')
// o: 125


const obtener_saldo = (() => {
const cache = new Map<string, number>();
     return (nombre: string): string => {
      if (cache.has(nombre)) {
      return cache.get(nombre)!.toString();
      }
      const cliente = CUSTOMERS.find((c) => c.customer === nombre);
       if (cliente) {
       cache.set(nombre, cliente.balance);
       return cliente.balance.toString();
       } else {
       return "cliente no encontrado";
    }
  };
})();

console.log(obtener_saldo("John")); 


var z: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var r: number = Math.floor(Math.random() * z.length);
//  do you find any problem with this code? if so, what is the possible solution to prevent it?
console.log(r);


