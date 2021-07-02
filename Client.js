export class Client{
    name;
    _cpf;
    _rg;

    get name(){
        return this.name;
    }

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    constructor(name, cpf, rg){
        this.name = name;
        this._cpf = cpf;
        this._rg = rg;
    }
}
