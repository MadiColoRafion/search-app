export class Aliment {
    nom: string;
    quantite: number;
    proteine: number;
    glucide: number;
    lipide: number;

    constructor(nom: string, proteine: number, lipide: number, quantite: number, glucide: number){
        this.nom = nom;
        this.proteine = proteine;
        this.quantite = quantite;
        this.glucide = glucide;
        this.lipide = lipide;
    }
}
