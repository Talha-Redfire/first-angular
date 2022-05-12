import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list-in-angular',
  templateUrl: './todo-list-in-angular.component.html',
  styleUrls: ['./todo-list-in-angular.component.css'],
})
export class TodoListInAngularComponent implements OnInit {
  constructor() {}
  taskList: any = [];
  getdata(data: NgForm): any {
    this.taskList.push(data);
  }
  removeTask(taskk: any): void {
    this.taskList = this.taskList.filter(
      (task: { task: any }) => task.task !== taskk
    );
  }
  ngOnInit(): void {}
}
