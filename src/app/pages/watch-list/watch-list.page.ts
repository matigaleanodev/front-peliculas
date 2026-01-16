import { Component, computed, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonCol,
  IonRow,
  IonGrid,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { WatchListService } from 'src/app/shared/services/watch-list/watch-list.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieCardComponent } from 'src/app/shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.page.html',
  styleUrls: ['./watch-list.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonToolbar,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    MovieCardComponent,
  ],
})
export class WatchListPage {
  readonly _service = inject(WatchListService);

  readonly watchList = computed(() => this._service.watchList());

  removeMovie(movie: Movie) {
    this._service.removeMovie(movie);
  }
}
