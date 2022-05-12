import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-and-call-function',
  templateUrl: './make-and-call-function.component.html',
  styleUrls: ['./make-and-call-function.component.css'],
})
export class MakeAndCallFunctionComponent implements OnInit {
  constructor() {}

  helloWorld() {
    alert('Hello world!');
  }

  helloWorldWithArg(args:any){
     alert(args)
  }

  ngOnInit(): void {}
}
