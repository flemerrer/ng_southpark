import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';
import {TitleCard} from './title-card/title-card';
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
