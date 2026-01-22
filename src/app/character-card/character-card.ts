import {Component, input, InputSignal} from '@angular/core';
import {Character} from '../types/character';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  character = input<Character>({id:0, img:'', firstName:'', lastName:''});
  isDead = input<boolean>(false)
}
