import { Component, input, OnInit, output } from '@angular/core';
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
export class MovieCardComponent {
  readonly movie = input.required<Movie>();
  readonly actionName = input<string>();

  readonly action = output<Movie>();

  onCLick() {
    this.action.emit(this.movie());
  }
}
