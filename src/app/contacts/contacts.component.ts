import { Component, OnInit } from '@angular/core';
import { faCoffee, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
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
    const nameInput = (<HTMLInputElement>document.querySelector(".nameCtrl")).value.trim();
   const emailInput = (<HTMLInputElement>document.getElementById("emailAddress")).value.trim();  
   let message = (<HTMLInputElement>document.getElementById("msg")).value.trim();
    const subject = (<HTMLInputElement>document.querySelector(".subject")).value.trim();
   message = "Under construction";
   //alert("Page under Construction");
    console.log(nameInput);
    if (nameInput.length <= 0) {
      console.log("Enter name");
      return;
    } else {
      console.log(nameInput);
    }
    window.open("mailto:chamunorwa.kuseri@gmail.com?subject=subject");
    console.log(message);
  }


}
