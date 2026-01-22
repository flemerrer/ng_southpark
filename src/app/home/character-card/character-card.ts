import {Component, Input, input} from '@angular/core';
import {Character} from '../../types/character';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  // @Input() character!: Character
  character = input<Character>({id:0, img:'', firstName:'', lastName:''});
  isDead = input<boolean>(false)
}
