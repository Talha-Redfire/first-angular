import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-acounter',
  templateUrl: './make-acounter.component.html',
  styleUrls: ['./make-acounter.component.css'],
})
export class MakeACounterComponent implements OnInit {
  constructor() {}

  value: any = 0;

  // increment() {
  //   this.value++;
  // }
  // decrement() {
  //   if (this.value > 0) {
  //     this.value--;
  //   } else {
  //     this.value = 0;
  //   }
  // }

  CounterFunction(type: string) {
    type === 'increment' ? this.value++ : this.value--;
  }

  ngOnInit(): void {}
}
