export class Client{
    name;
    cpf;
    rg
}

export class CurrentAcount{
    agency = 1;
    balance = 0;
    client;

    withdraw(value) {
       if(this.balance < value || value <= 0) {
           console.log(`Insufficient balance to do a ${value} withdraw.`);
           return;
       }
       this.balance -= value;
       return value;
   }

   deposit(value){
       if(value > 0) {
         this.balance += value;  
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
