import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-condition',
  templateUrl: './if-else-condition.component.html',
  styleUrls: ['./if-else-condition.component.css'],
})
export class IfElseConditionComponent implements OnInit {
  constructor() {}
  show: boolean = false;
  showFunction() {
    this.show = !this.show;
  }
  ngOnInit(): void {}
}
