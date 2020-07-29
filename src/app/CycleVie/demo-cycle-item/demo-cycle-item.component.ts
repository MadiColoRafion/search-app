import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-cycle-item',
  templateUrl: './demo-cycle-item.component.html',
  styleUrls: ['./demo-cycle-item.component.css']
})

export class DemoCycleItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  data: string;
  constructor() {
    console.log('Contructor : ', this.data );
   }
  ngOnDestroy(): void {
    console.log('Destroy', this.data);
  }

  ngOnInit(): void {
    console.log('ngOnchanges');
    console.log('On Change');
  }

  ngOnChanges(change: SimpleChanges): void{
    console.log('int', this.data);
 }

}
