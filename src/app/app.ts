import { Component } from '@angular/core';
import {Navbar} from './navbar/navbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Navbar,
    RouterOutlet
  ],
  styleUrl: './app.css'
})
export class App {
}
