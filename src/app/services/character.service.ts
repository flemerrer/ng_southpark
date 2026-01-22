import { Injectable } from '@angular/core';
import {Character} from '../types/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  // Mock DB
  protected readonly characters: Character[] = [
    {id: 1, firstName: "Eric", lastName: "Cartman", img: "/characters/eric.jpg"},
    {id: 2, firstName: "Stan", lastName: "Marsh", img: "/characters/stan.jpg"},
    {id: 3, firstName: "Kenny", lastName: "McCormick", img: "/characters/kenny.jpg"},
    {id: 4, firstName: "Kyle", lastName: "Broflovsky", img: "/characters/kyle.jpg"},
  ];

  getCharacters = () => {return this.characters}
}
