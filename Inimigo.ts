 
import { Item } from "./Item";

export interface Inimigo{
    nome: string;
    skill: string;
    vida: number;
    atk: number;
    def: number;
    arma: string;

  
}
function causaDano(dano: number, vida: number): void {

    let vidaPerdida = vida - dano
}