import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // styleUrls: ['./user-list.component.css']
  styles: [
    `
      sstyle {
        color: red;
      }
    `,
  ],
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
