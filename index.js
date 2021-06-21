import { CurrentAcount } from "./Client.js";
import { Client } from "./Client.js";


const client1 = new Client();

const client2 = new Client();

const currentAcount1 = new CurrentAcount();

const currentAcount2 = new CurrentAcount(); 

client1.name = 'Guilherme';
client1.cpf = '028.544.021-90';
client1.rg = 5384207;

client2.name = 'Eduarda';
client2.cpf = '312.014.021-52';
client2.rg = 2309100;

currentAcount1.agency = 'St. Leste';
currentAcount1.client = client1;
currentAcount1.deposit(2000);
console.log(`${client1.name}'s balance: ${currentAcount1.balance}`);


currentAcount2.agency = 'St. Oeste';
currentAcount2.client = client2;
currentAcount2.deposit(6000);
console.log(`${client2.name}'s balance: ${currentAcount2.balance}`);

currentAcount1.withdraw(1000);
currentAcount2.withdraw(1000);

currentAcount1.transfer(1000, currentAcount2);

console.log(currentAcount1, '\n',currentAcount2);

