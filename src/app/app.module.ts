import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AlimentListComponent } from './Aliment/aliment-list/aliment-list.component';
import { RepasComponent } from './Aliment/aliment-list/repas/repas.component';
import { AlimentDetailsComponent } from './Aliment/aliment-list/repas/aliment-details/aliment-details.component';
import { DemoComponent } from './CycleVie/demo/demo.component';
import { DemoCycleItemComponent } from './CycleVie/demo-cycle-item/demo-cycle-item.component';
import { SurlignerDirective } from './CycleVie/surligner.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlimentListComponent,
    RepasComponent,
    AlimentDetailsComponent,
    DemoComponent,
    DemoCycleItemComponent,
    SurlignerDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
