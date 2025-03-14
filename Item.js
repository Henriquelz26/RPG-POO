"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Martelo = exports.Arco = exports.Cajado = exports.Espada = void 0;
var Espada = /** @class */ (function () {
    function Espada(nome, raridade, dano) {
        this.dano = 40;
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
    return Espada;
}());
exports.Espada = Espada;
var Cajado = /** @class */ (function () {
    function Cajado(nome, raridade, dano) {
        this.dano = 50;
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
    return Cajado;
}());
exports.Cajado = Cajado;
var Arco = /** @class */ (function () {
    function Arco(nome, raridade, dano) {
        this.dano = 45;
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
    return Arco;
}());
exports.Arco = Arco;
var Martelo = /** @class */ (function () {
    function Martelo(nome, raridade, dano) {
        this.dano = 35;
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
    return Martelo;
}());
exports.Martelo = Martelo;
