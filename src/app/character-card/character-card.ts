import {Component, Input, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  @Input() character!: { id: number, firstName: string, lastName: string, img: string };
  @Input() isDead!: WritableSignal<boolean>
}
