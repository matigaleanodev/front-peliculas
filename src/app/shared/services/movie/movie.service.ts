import { Injectable, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  readonly movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      poster: 'https://image.tmdb.org/t/p/w342/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    },
    {
      id: 2,
      title: 'Interstellar',
      year: 2014,
      poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
    {
      id: 4,
      title: 'Fight Club',
      year: 1999,
      poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      year: 1994,
      poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    },
    {
      id: 6,
      title: 'The Matrix',
      year: 1999,
      poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    },
  ]);
}
