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
        url: "https://rest-api-countries-angular.netlify.com/",
        notes: `Search for any country in the world or filter countries by continent. 
        Toggle between dark and light theme. The project was created using Angular Framework,
        Javascript, HTML and CSS`,
      },
      {
        name: "Bookmark Landing page",
        image:  "assets/images/ProjectImage/logo-bookmark.svg",
        url: "https://chamumutezva.github.io/book-marking-landing-page/",
        notes: `A basic landing page that i created using HTML, CSS and Javascript
        `
      },
      {
        name: "Url Shortener", 
        image: "assets/images/ProjectImage/urlShortener.png",
        url: "https://chamumutezva.github.io/url-shortening-api-master/",
        notes: `This project can be used to shorten any Url. Post the url you 
        want to shorten in the provided and wait for magic. HTML, CSS and Javascript`
      },
      {
        name:  "Price Component with toggle",
        image:  "assets/images/ProjectImage/pricingToggle.png",
        url: "https://chamumutezva.github.io/pricing-component-with-toggle-master/",
        notes: ` Toggle between mothhly subscription and yearly. Used mainly HTML, css
        snd javascipt
        `
      },
      {
        name: "Four Card Feature Section",
        image: "assets/images/ProjectImage/fourCardFeature.svg",
        url: "https://preprince-fourcardfeature.netlify.com/",
        notes: `This FourCardFeature project created using Flexbox, CSS,
        HTML and Javacript
        `
      },
      {
        name:  "Intro Component Sign up form",
        image: "assets/images/ProjectImage/introComp.png",
        url: "https://chamumutezva.github.io/Intro-component-with-sign-up-form/",
        notes: `Sign up form , i created using HTML, CSS and Javascript. Validation of
        user inputs and accessibilty taken into consideration.`
      }
  
    ]
  }

  constructor() { }
}
