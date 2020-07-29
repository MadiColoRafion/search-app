import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aliment } from '../models/aliment';

@Component({
  selector: 'app-aliment-details',
  templateUrl: './aliment-details.component.html',
  styleUrls: ['./aliment-details.component.css']
})
export class AlimentDetailsComponent implements OnInit {

  showMyContainer: boolean = false;
  private _aliment: Aliment;
  nom: string;
  quantite: number;
  proteine: number;
  lipide: number;
  glucide: number;

  @Input()
  set aliment(aliment: Aliment){
    if (aliment){
      this._aliment = aliment;
      this.nom = aliment.nom;
      this.glucide = aliment.glucide;
      this.lipide = aliment.lipide;
      this.proteine = aliment.proteine;
      this.quantite = aliment.quantite;
    }
  }

  @Output()
  get item():Aliment {
    return this._aliment;
  }

  @Output()
  onDelete = new EventEmitter();

  constructor() {
    this.quantite = 0;
  }

  ngOnInit(): void {
  }

  delete(): void{
    this.onDelete.emit(this._aliment);
  }

}
