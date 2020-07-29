import { Component, OnInit, Input } from '@angular/core';
import { Aliment } from './models/aliment';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {
  repasAliments: Aliment[] = [];

 @Input()
  set aliment(alimentAjoute: Aliment){
    if (alimentAjoute){
      this.repasAliments.push(alimentAjoute);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  delete(del: Aliment): void{

    this.repasAliments.splice(this.repasAliments.indexOf(del), 1);
  }
}
