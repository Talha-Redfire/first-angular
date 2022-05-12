import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-of-pipes',
  templateUrl: './basic-of-pipes.component.html',
  styleUrls: ['./basic-of-pipes.component.css'],
})
export class BasicOfPipesComponent implements OnInit {
  constructor() {}
  name: string = 'basic-of-pipes';
  date: Date = new Date();
  ngOnInit(): void {}
}
