import { Routes } from '@angular/router';
import {Contact} from './contact/contact';
import {NotFound} from './not-found/not-found';
import {Home} from './home/home';

export const routes: Routes = [
  {path: '', component:Home},
  {path: 'contact', component:Contact},
  {path: '404', component:NotFound},
  {path: '**', component:NotFound}
];
