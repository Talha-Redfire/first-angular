import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  FormHandler(Data: any) {
    console.log(Data);
  }
  LoginFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}
}
