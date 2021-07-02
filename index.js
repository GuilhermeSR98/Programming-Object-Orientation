import { CurrentAcount } from "./CurrentAcount.js";
import { Client } from "./Client.js";


const client1 = new Client('Guilherme', '028.544.021-90', 5384207);
const client2 = new Client('Eduarda', '312.014.021-52', 2309100);

const currentAcount1 = new CurrentAcount('St. Leste', client1);
const currentAcount2 = new CurrentAcount('St. Oeste', client2); 

currentAcount1.deposit(2000);
currentAcount2.deposit(6000);

currentAcount1.withdraw(500);
currentAcount2.withdraw(1000);

currentAcount1.transfer(1000, currentAcount2);

console.log(currentAcount1, '\n',currentAcount2);

console.log(CurrentAcount.numberOfAccounts);

