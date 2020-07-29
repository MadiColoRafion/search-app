import { Component } from '@angular/core';
import { Aliment } from './Aliment/aliment-list/repas/models/aliment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  aliment: Aliment;

  title = 'Search Food';
}
