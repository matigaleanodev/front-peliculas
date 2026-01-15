import { Component, input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonButton,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-card',
  imports: [
    IonCardContent,
    IonButton,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
    IonCard,
  ],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  readonly movie = input.required<Movie>();

  constructor() {}

  ngOnInit() {}
}
