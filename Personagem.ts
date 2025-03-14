import { Inimigo } from "./Inimigo";
import { Item } from "./Item";

export class Personagem {
    nome: string;
    skill: string
    vida: number;
    atk: number;
    def: number;
    storage: string[];
    

    constructor( nome: string, skill: string, vida: number, atk: number, def: number,storage: string[] ){
        this.nome = nome;
        this.skill = skill;
        this.vida = vida;
        this.atk = atk;
        this.def = def;
        this.storage = [];
    }

} 



export class Guerreiro extends Personagem {
    constructor(nome: string, skill: string){
        super(nome, skill, 75, 30, 20, ['espada comum'])
    } 
}

export class Mago extends Personagem {
    constructor(nome: string, skill: string){
        super(nome, skill, 65, 50, 35, ['cajado comum'])
    } 
}

export class Atirador extends Personagem {
    constructor(nome: string, skill: string){
        super(nome, skill, 70, 5, 40, ['arco comum'])
    } 
}

export class Tanque extends Personagem {
    constructor(nome: string, skill: string){
        super(nome, skill, 100, 20, 50, ['martelo comum'])
    } 
}


function escolhaDeClasse():void{
    
}
