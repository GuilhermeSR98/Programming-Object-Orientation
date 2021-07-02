import { Client } from './Client.js'

export class CurrentAcount{
    agency;
    _balance = 0;
    _client;
    static numberOfAccounts = 0;

    set client(newValue){
        if(newValue instanceof Client){
            this._client = newValue;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    constructor(agency, client){
        this.agency = agency;
        this.client = client;
        CurrentAcount.numberOfAccounts ++;
    }

    withdraw(value) {
       if(this._balance < value || value <= 0) {
           console.log(`Insufficient balance to do a ${value} withdraw.`);
           return;
       }
       this._balance -= value;
       return value;
   }

   deposit(value){
       if(value > 0) {
         this._balance += value;  
       }
       else {
           console.log('Must be a value greater than 0.')
       }
   }

   transfer(value, acount){
       if(value <= 0 || value > this.balance){
           console.log(`Unable to transfer.`);
           return;
       }
       const amount = this.withdraw(value);
       acount.deposit(amount);
   }
}