class Negociacao{

    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(private _data: Date, private _quantidade: number, private _valor: number){

        // if(!data){
        //     throw new Error('data deve ser preenchida');
        // }

        // if(!quantidade){
        //     throw new Error('quantidade deve ser preenchida');
        // }

        // if(!valor){
        //     throw new Error('valor deve ser preenchida');
        // }

        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }

    get data(){

        return this._data;

    }

    get quantidade() {

        return this._quantidade;

    }

    get valor(){

        return this._valor;
    }

    get volume (){

        return this._quantidade + this._valor;

    }
}