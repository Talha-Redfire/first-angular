import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-important-events',
  templateUrl: './important-events.component.html',
  styleUrls: ['./important-events.component.css'],
})
export class ImportantEventsComponent implements OnInit {
  constructor() {}
  title = 'Important Events In Angular';
  getdata() {
    console.log('Not implemented');
  }
  displayvalue: string = '';
  handleEvent(event: any) {
    this.displayvalue = event.target.value;
  }
  ngOnInit(): void {}
}
