import {Component, computed, Input, Signal, signal, WritableSignal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";
import {CharacterCard} from '../character-card/character-card';
import {combineLatestAll} from 'rxjs';
import {Character} from '../../types/character';

@Component({
  selector: 'app-main-card',
  imports: [
    FormsModule,
    TitleCasePipe,
    CharacterCard,
  ],
  templateUrl: './main-card.html',
  styleUrl: './main-card.css',
})
export class MainCard {
  protected readonly title: string = 'Welcome to South Park'
  protected readonly characters: Character[] = [
    {id: 1, firstName: "Eric", lastName: "Cartman", img: "/characters/eric.jpg"},
    {id: 2, firstName: "Stan", lastName: "Marsh", img: "/characters/stan.jpg"},
    {id: 3, firstName: "Kenny", lastName: "McCormick", img: "/characters/kenny.jpg"},
    {id: 4, firstName: "Kyle", lastName: "Broflovsky", img: "/characters/kyle.jpg"},
  ];
  count: number = 0
  isDead: WritableSignal<boolean> = signal(false)
  kennyStatus = computed(() => this.isDead())
  addOne = () => {
    this.count++
    if (!this.isDead()) {
      this.characters[2].img = "/characters/ghost_kenny.png"
      this.isDead.set(true)
    }
    const countNode = document.getElementById("count")
    if (countNode && this.count > 0  && this.count < 5) {
      countNode.classList.add("blue")
    } else if (countNode && this.count > 5  && this.count < 10) {
      countNode.classList.remove("blue")
      countNode.classList.add("purple")
    } else if (countNode && this.count > 10)  {
      countNode.classList.remove("purple")
      countNode.classList.add("red")
    }
  };
  name?: String
}
