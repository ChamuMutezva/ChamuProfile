import { Component, OnInit } from '@angular/core';
import { faCoffee , faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
 // selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
faCoffee = faCoffee;
faTwitter = faMoon;
  constructor() { }

  ngOnInit() {
  }

}
