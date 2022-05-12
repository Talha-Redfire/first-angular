import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-loop-angular',
  templateUrl: './nested-loop-angular.component.html',
  styleUrls: ['./nested-loop-angular.component.css'],
})
export class NestedLoopAngularComponent implements OnInit {
  constructor() {}
  persons = [
    {
      name: 'Sylvester Carter',
      phone: '(414) 417-3018',
      email: 'a.ultricies@outlook.net',
      address: '409-1181 Nec Road',
      socialAccounts: ['facebook', 'insta', 'twitter'],
    },
    {
      name: 'Herman Dawson',
      phone: '1-318-808-5184',
      email: 'facilisis.lorem.tristique@icloud.edu',
      address: 'Ap #267-9895 Ac St.',
      socialAccounts: ['facebook', 'insta', 'twitter'],
    },
    {
      name: 'Rooney Newton',
      phone: '(418) 717-2792',
      email: 'eu.eros@yahoo.org',
      address: 'Ap #562-7924 Mi, Avenue',
      socialAccounts: ['facebook', 'insta', 'twitter'],
    },
    {
      name: 'Zelda Kramer',
      phone: '1-505-585-3478',
      email: 'vestibulum.ante@hotmail.com',
      address: 'P.O. Box 398, 9108 Vestibulum Avenue',
      socialAccounts: ['facebook', 'insta', 'twitter'],
    },
    {
      name: 'Benedict Gross',
      phone: '1-952-818-4304',
      email: 'ipsum.suspendisse@aol.edu',
      address: 'P.O. Box 298, 233 Enim Rd.',
      socialAccounts: ['facebook', 'insta', 'twitter'],
    },
  ];
  ngOnInit(): void {}
}
