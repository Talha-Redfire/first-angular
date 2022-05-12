import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-in-angular',
  templateUrl: './form-in-angular.component.html',
  styleUrls: ['./form-in-angular.component.css'],
})
export class FormInAngularComponent implements OnInit {
  constructor() {}

  formData: any = {};
  getdata(data: NgForm): any {
    this.formData = data;
  }
  ngOnInit(): void {}
}
