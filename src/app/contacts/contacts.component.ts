import { Component, OnInit } from '@angular/core';
import { faCoffee , faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { EmailValidator } from '@angular/forms';

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

  submitDetails(): void {
    const nameInput = document.querySelector(".nameCtrl");
    const emailInput = document.getElementById("emailAddress");
    const subject = document.querySelector(".subject");
    
    console.log(subject);
  }

}
