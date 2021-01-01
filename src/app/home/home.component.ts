import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isModalActive: boolean = false;
  detalles: any = [
    {
      description: 'Framework utilizado: Angular (versión 11)',
    },
    {
      description: 'Framework CSS: Bulma',
    },
    {
      description: 'Animaciones: AOS (Animate On Scroll Library)',
    },
    {
      description: 'Hosting: Firebase',
    },
    {
      description: 'Sistema de control de versiones: Git',
    },
    {
      description: 'Editor de código: Visual Studio Code',
    },
    {
      description: 'Metodología: Kanban (con Trello)',
    },
    {
      description: 'Diseño: Responsive',
    },
  ];

  ngOnInit(): void {
  }
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
}
