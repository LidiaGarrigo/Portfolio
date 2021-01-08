import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  skills: any = [
    {
      name: 'HTML',
      progress: 70,
    },
    {
      name: 'CSS',
      progress: 60,
    },
    {
      name: 'JavaScript',
      progress: 50,
    },
    {
      name: 'TypeScript',
      progress: 40,
    },
    {
      name: 'Bootstrap',
      progress: 60,
    },
    {
      name: 'JSON & AJAX',
      progress: 40,
    },
    {
      name: 'Git',
      progress: 60,
    },
    {
      name: 'Angular JS',
      progress: 60,
    },
    {
      name: 'Firebase',
      progress: 40,
    },
    {
      name: 'Java',
      progress: 30,
    },
    {
      name: 'Wordpress',
      progress: 30,
    },
    {
      name: 'Php',
      progress: 30,
    },
    {
      name: 'Ionic',
      progress: 30,
    },
    {
      name: 'Android Studio',
      progress: 30,
    },
    {
      name: 'Xcode',
      progress: 30,
    },
  ];

  constructor() {}

  ngOnInit(): void {

  }

}
