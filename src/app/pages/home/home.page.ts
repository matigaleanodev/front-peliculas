import { Component, computed, inject, OnInit } from '@angular/core';
import { MovieCardComponent } from 'src/app/shared/components/movie-card/movie-card.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    MovieCardComponent,
  ],
})
export class HomePage implements OnInit {
  private readonly _service = inject(MovieService);

  movies = computed(() => this._service.movies());
  constructor() {}

  ngOnInit() {}
}
