export class CurrentAcount{
    agency = 1;
    balance = 0;
    withdraw(value) {
       if(this.balance <= value && value <= 0) {
           console.log(`Insufficient balance to do a ${value} withdraw.`);
           return;
       }
       this.balance -= value;
   }
   deposit(value){
       if(value > 0) {
         this.balance += value;  
       }
       else {
           console.log('Must be a value greater than 0.')
       }
   }
}

export class Client{
    name;
    cpf;
    rg
}

