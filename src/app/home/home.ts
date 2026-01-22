import { Component } from '@angular/core';
import {MainCard} from './main-card/main-card';

@Component({
  selector: 'app-home',
  imports: [
    MainCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
