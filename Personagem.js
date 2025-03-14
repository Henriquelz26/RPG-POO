"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tanque = exports.Atirador = exports.Mago = exports.Guerreiro = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, skill, vida, atk, def, storage) {
        this.nome = nome;
        this.skill = skill;
        this.vida = vida;
        this.atk = atk;
        this.def = def;
        this.storage = [];
    }
    return Personagem;
}());
exports.Personagem = Personagem;
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome, skill) {
        return _super.call(this, nome, skill, 75, 30, 20, ['espada comum']) || this;
    }
    return Guerreiro;
}(Personagem));
exports.Guerreiro = Guerreiro;
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome, skill) {
        return _super.call(this, nome, skill, 65, 50, 35, ['cajado comum']) || this;
    }
    return Mago;
}(Personagem));
exports.Mago = Mago;
var Atirador = /** @class */ (function (_super) {
    __extends(Atirador, _super);
    function Atirador(nome, skill) {
        return _super.call(this, nome, skill, 70, 5, 40, ['arco comum']) || this;
    }
    return Atirador;
}(Personagem));
exports.Atirador = Atirador;
var Tanque = /** @class */ (function (_super) {
    __extends(Tanque, _super);
    function Tanque(nome, skill) {
        return _super.call(this, nome, skill, 100, 20, 50, ['martelo comum']) || this;
    }
    return Tanque;
}(Personagem));
exports.Tanque = Tanque;
