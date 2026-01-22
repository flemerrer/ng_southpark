import { Component, signal } from '@angular/core';
import {TitleCard} from './main-card/main-card';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    TitleCard,
    Navbar
  ],
  styleUrl: './app.css'
})
export class App {
}
