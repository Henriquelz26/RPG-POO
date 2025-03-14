import { Guerreiro, Personagem } from "./Personagem";
import { Inimigo } from "./Inimigo";

export interface Item {
    nome: string;
    raridade: string | number;
    dano: number;
}

export class Espada implements Item {
    nome: string;
    raridade: string;
    dano: number = 40;

    constructor(nome: string, raridade: string, dano: number) {
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
}
export class Cajado implements Item {
    nome: string;
    raridade: string;
    dano: number = 50;

    constructor(nome: string, raridade: string, dano: number) {
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
}
export class Arco implements Item {
    nome: string;
    raridade: string;
    dano: number = 45

    constructor(nome: string, raridade: string, dano: number) {
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
}
export class Martelo implements Item {
    nome: string;
    raridade: string;
    dano: number = 35;

    constructor(nome: string, raridade: string, dano: number) {
        this.nome = nome;
        this.dano = dano;
        this.raridade = raridade;
    }
}

function causaDano(): number {
    return this.dano 
    
}