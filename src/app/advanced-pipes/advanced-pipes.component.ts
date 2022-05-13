import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-pipes',
  templateUrl: './advanced-pipes.component.html',
  styleUrls: ['./advanced-pipes.component.css'],
})
export class AdvancedPipesComponent implements OnInit {
  constructor() {}
  name: string = 'AdvancedPipes';
  person: {
    name: string;
    age: Number;
  } = {
    name: 'John',
    age: 10,
  };
  ngOnInit(): void {}
}
