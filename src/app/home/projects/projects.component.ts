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
      description: 'Se trata de una aplicación web en la que el usuario solo tiene acceso si inicia sesión, o en su defecto si se registra. Una vez introducidos los datos correctos, el usuario puede acceder a su lista de tareas, accediendo al detalle de una de estas es informado del día en el que se encuentra y puede iniciar el contador apareciendo otros botones. Al apretar al botón "Finalizar" se muestra el tiempo total invertido por tarea. (Simulación)',
      image: '../../../assets/avatar-user.jpg',
      link: 'https://dimension-time-73987.web.app',
      id: 1,
    },
    {
      title: 'The Movie',
      description: 'En la página principal de la aplicación web, se muestra la cartelera de películas disponibles, una vez seleccionada la película en cuestión, se accede al detalle de la misma.',
      image: '../../../assets/movies.png',
      link: 'https://lidiagarrigo.github.io/the-movie/home',
      id: 2,
    },
    {
      title: 'Superalimentos',
      description: 'En esta aplicación web, se muestra una serie de alimentos y sus calorías. En el buscador, se pude filtrar por letras en concreto para encontrar antes el alimento, y en el caso de no estar en la lista, se puede añadir otro. Una vez seleccionado el alimento deseado, se crea una tabla con el total de calorías y alimentos añadidos. Al navegar haciendo scroll hacia abajo, la tabla del total de alimentos te acompaña para saber lo que ya se ha añadido.',
      image: '../../../assets/superalimento.png',
      link: 'https://lidiagarrigo.github.io/superalimentos/',
      id: 3,
    },
    {
      title: 'LastFm',
      description: 'Web de playlists de canciones, dónde se muestran 5 géneros de canciones distintos. También se puede seleccionar si se desea ver una vista general, el Top 10 de las canciones más escuchadas o bien el grupo más escuchado con sus 4 canciones más destacadas.  ',
      image: '../../../assets/lastFm.png',
      link: 'https://lidiagarrigo.github.io/clone-lastfm/',
      id: 3,
    }
  ];

  constructor() { }
  ngOnInit(): void {
  }
  card(){

  }
}
