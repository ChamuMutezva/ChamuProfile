import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = "Chamu Mutezva";
  languages: string[] = ["Html", "CSS", "Javascript", "Angular", "Git"];
  current: string = "React"
  constructor() { }

  ngOnInit() {
  }

}
