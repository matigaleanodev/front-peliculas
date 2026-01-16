import { Injectable, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  readonly watchList = signal<Movie[]>([]);

  addMovie(movie: Movie) {
    const list = this.watchList();

    const index = list.findIndex((m) => m.id === movie.id);
    if (index < 0) list.push(movie);

    this.watchList.set(list);
  }

  removeMovie(movie: Movie) {
    this.watchList.update((list) => list.filter((m) => m.id !== movie.id));
  }
}
