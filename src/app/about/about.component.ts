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
  ];

  constructor() {}

  ngOnInit(): void {}
}
