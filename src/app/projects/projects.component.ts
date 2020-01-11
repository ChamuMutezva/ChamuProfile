import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  listProjects: string[] = ["Rest countries api", "Bookmark Landing page", "Url Shortener", 
  "Price Component with toggle", "Four Card Feature Section", "Intro Component Sign up form"];
  constructor() { }

  ngOnInit() {
  }

}
