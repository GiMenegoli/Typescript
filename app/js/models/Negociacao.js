class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(_data, _quantidade, _valor) {
        // if(!data){
        //     throw new Error('data deve ser preenchida');
        // }
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
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
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade + this._valor;
    }
}
