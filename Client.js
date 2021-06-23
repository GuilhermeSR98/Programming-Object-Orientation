export class Client{
    _name;
    _cpf;
    _rg;

    get name(){
        return this._name;
    }

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    constructor(name, cpf, rg){
        this._name = name;
        this._cpf = cpf;
        this._rg = rg;
    }
}

export class CurrentAcount{
    agency;
    balance = 0;
    client;

    constructor(agency, client){
        this.agency = agency;
        this.client = client;
    }

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
