import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ProjectModel } from '../project-model';

@Component({
  //selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  listProjects : ProjectModel[];

 
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.listProjects = this.projectService.getProjects();
  }

}
