import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop-in-angular',
  templateUrl: './for-loop-in-angular.component.html',
  styleUrls: ['./for-loop-in-angular.component.css'],
})
export class ForLoopInAngularComponent implements OnInit {
  constructor() {}
  persons: any = ['Talha', 'Zubair', 'Kashi', 'Hello'];
  ngOnInit(): void {}
}
