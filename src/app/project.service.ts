import { Injectable } from '@angular/core';
import { ProjectModel } from './project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): ProjectModel[] {
    return  [
      {
        name: "Rest countries api",
        image:  "assets/images/ProjectImage/rest.png",
        url: "https://rest-api-countries-angular.netlify.com/"
      },
      {
        name: "Bookmark Landing page",
        image:  "assets/images/ProjectImage/logo-bookmark.svg",
        url: "https://chamumutezva.github.io/book-marking-landing-page/"
      },
      {
        name: "Url Shortener", 
        image: "assets/images/ProjectImage/urlShortener.png",
        url: "https://chamumutezva.github.io/url-shortening-api-master/"
      },
      {
        name:  "Price Component with toggle",
        image:  "assets/images/ProjectImage/pricingToggle.png",
        url: "https://chamumutezva.github.io/pricing-component-with-toggle-master/"
      },
      {
        name: "Four Card Feature Section",
        image: "assets/images/ProjectImage/fourCardFeature.svg",
        url: "https://preprince-fourcardfeature.netlify.com/"
      },
      {
        name:  "Intro Component Sign up form",
        image: "assets/images/ProjectImage/introComp.png",
        url: "https://chamumutezva.github.io/Intro-component-with-sign-up-form/"
      }
  
    ]
  }

  constructor() { }
}
