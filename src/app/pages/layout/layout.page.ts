import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { listOutline, filmOutline, informationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    RouterLink,
    IonRouterLink,
  ],
})
export class LayoutPage {
  constructor() {
    addIcons({
      listOutline,
      filmOutline,
      informationOutline,
    });
  }

  readonly tabs = [
    {
      tab: 'watch-list',
      link: 'watch-list',
      icon: 'list-outline',
      label: 'Agenda',
    },
    {
      tab: 'home',
      link: 'home',
      icon: 'film-outline',
      label: 'Peliculas',
    },
    {
      tab: 'about',
      link: 'about',
      icon: 'information-outline',
      label: 'Info',
    },
  ];
}
