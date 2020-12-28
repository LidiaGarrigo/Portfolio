import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  projects: any = [
    {
      title: 'Dimension Time',
      description: 'description project 1',
      image: '../../../assets/avatar-user.jpg',
      link: 'https://dimension-time-73987.web.app/home',
      id: 1,
    },
    {
      title: 'The Movie',
      description: 'description project 2',
      image: '../../../assets/movies.png',
      link: 'https://lidiagarrigo.github.io/the-movie/home',
      id: 2,
    },
    {
      title: 'Superalimentos',
      description: 'description project 3',
      image: '../../../assets/superalimento.png',
      link: 'https://lidiagarrigo.github.io/superalimentos/',
      id: 3,
    }
  ];

  constructor() { }
  ngOnInit(): void {
  }
  card(){

  }
}
