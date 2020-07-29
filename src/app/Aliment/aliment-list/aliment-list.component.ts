import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aliment } from '../aliment-list/repas/models/aliment';



@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {

  listeAliment: Aliment[];
  filterAliments: Aliment[];

  rechercheAliment: string;

  @Output('add') 
  onAddAliment = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    this.listeAliment = [
      new Aliment('Fruit', 50, 1, 3, 2),
      new Aliment('Poulet', 100, 3,  2, 5),
      new Aliment('Burger', 20, 30, 25, 42),
      new Aliment('Oeuf', 100, 31, 5 , 8 )
    ];

    this.filterAliments = this.listeAliment;

  }

  rechercher(): void{
    console.log(this.rechercheAliment.toLowerCase());
    this.filterAliments = this.listeAliment.filter(e => {
      return e.nom.search(this.rechercheAliment.toLowerCase()) !== -1;
    });

  }

  onAdd(aliment: Aliment): void{
    this.onAddAliment.emit(aliment);
  }

}
