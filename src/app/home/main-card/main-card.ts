import {Component, computed, inject, Input, Signal, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";
import {CharacterCard} from '../character-card/character-card';
import {combineLatestAll} from 'rxjs';
import {Character} from '../../types/character';
import {Characters} from '../../services/characters.service';

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
	// Old Method of dependency injection
	// constructor(private readonly characterService: Characters) {
	// 	this.characters = this.characterService.getCharacters();
	// }
	private characterService = inject(Characters)
	protected readonly title: string = 'Welcome to South Park'
	protected readonly characters: Character[] = this.characterService.getCharacters();
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
		if (countNode && this.count > 0 && this.count < 5) {
			countNode.classList.add("blue")
		} else if (countNode && this.count > 5 && this.count < 10) {
			countNode.classList.remove("blue")
			countNode.classList.add("purple")
		} else if (countNode && this.count > 10) {
			countNode.classList.remove("purple")
			countNode.classList.add("red")
		}
	};
	name?: String
}
