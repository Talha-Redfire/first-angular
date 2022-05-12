import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-send-data-child-to-parent-component',
  templateUrl: './send-data-child-to-parent-component.component.html',
  styleUrls: ['./send-data-child-to-parent-component.component.css'],
})
export class SendDataChildToParentComponentComponent implements OnInit {
  constructor() {}
  @Output() updateDataEvent = new EventEmitter();
  ngOnInit(): void {}
}
