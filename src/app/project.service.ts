import { Injectable } from '@angular/core';
import { ProjectModel } from './project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): ProjectModel[] {
    return  [
     {
      name: "Covid19 Statistics",
      image: "assets/images/ProjectImage/covid19.svg",
      url: "https://chamumutezva.github.io/Covid19-Stats/",
      notes: `The Covid19 Statistics is a project that provides live updates of the current
      Covid19 global pandemic. It was initiated to keep people informed and spread awareness. Among other 
      things the information includes the total global figures as well as for individual countries. Stay safe `
     },
      {
        name: "Easybank Landing page",
        image: "assets/images/ProjectImage/easybank.jpg", 
        url: "https://chamumutezva.github.io/easybank-landing-page-master/",
       notes: `Welcome to Easybank, view the various banking services and products online.
       Created using HTML, CSS , Javascript`
      },
      {
        name: "Rest countries api",
        image:  "assets/images/ProjectImage/rest.png",
        url: "https://rest-api-countries-angular.netlify.com/",
        notes: `Search for any country in the world or filter countries by continent. 
        Toggle between dark and light theme. The project was created using Angular Framework,
        Javascript, HTML, Typescript and CSS`
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
        notes: ` Toggle between monthly subscription and yearly. Used mainly HTML, css
        snd javascript
        `
      },
      {
        name: "Social Media Dashboard",
        image: "assets/images/ProjectImage/switchboard.jpg",
        url: "https://chamumutezva.github.io/social-media-dashboard-with-theme-switcher-master/",
        notes: `A summary of your social activities. Facebook, Twitter, Instagram and Youtube at a glance.
        An overview of the current day activities - views, likes , retweets e.tc. The project was created mainly
        using HTML5, CSS3, Javascript, Flexbox , Grid and Sass`

      }
      ,
      {
        name: "Four Card Feature Section",
        image: "assets/images/ProjectImage/fourCardFeature.svg",
        url: "https://preprince-fourcardfeature.netlify.com/",
        notes: `This FourCardFeature project created using Flexbox, CSS,
        HTML and Javascript
        `
      },
      {
        name:  "Intro Component Sign up form",
        image: "assets/images/ProjectImage/introComp.png",
        url: "https://chamumutezva.github.io/Intro-component-with-sign-up-form/",
        notes: `Sign up form , i created using HTML, CSS and Javascript. Validation of
        user inputs and accessibility taken into consideration.`
      },
      {
        name: "Manage Landing page",
        image: "assets/images/ProjectImage/manage.jpg",
        url: "https://chamumutezva.github.io/manage-landing-page-master/",
        notes: `Manage - here is a list of what we do in helping to build world class projects. Check also 
        out testimonial Section for feedbacks from some of our clients`
      },
      {
        name: "Myteam website page",
        image: "assets/images/ProjectImage/myteam.svg",
        url: "https://chamumutezva.github.io/my-team-website-design/",
        notes: `A 3 page responsive website created using html, javascript and sass. The project contains
        the main page, about page and contact page`
      }
    ]
  }

  constructor() { }
}
