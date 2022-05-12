import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-send-data-parent-to-child-component',
  templateUrl: './send-data-parent-to-child-component.component.html',
  styleUrls: ['./send-data-parent-to-child-component.component.css'],
})
export class SendDataParentToChildComponentComponent implements OnInit {
  constructor() {}
  // @Input() Item: any = [];
  @Input() Item: any = [];
  ngOnInit(): void {}
}
