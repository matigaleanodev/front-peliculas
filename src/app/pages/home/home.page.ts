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
import { Movie } from 'src/app/shared/models/movie.model';
import { WatchListService } from 'src/app/shared/services/watch-list/watch-list.service';

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
export class HomePage {
  private readonly _service = inject(MovieService);
  private readonly _watchList = inject(WatchListService);

  readonly movies = computed(() => this._service.movies());

  addMovieToWatchList(movie: Movie) {
    this._watchList.addMovie(movie);
  }
}
