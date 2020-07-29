import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  display: boolean = false;
  data: string;
  constructor() { }

  ngOnInit(): void {
  }

}