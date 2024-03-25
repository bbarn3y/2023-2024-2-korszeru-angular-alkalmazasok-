import {Component, Input} from '@angular/core';
import {Character} from "@models/character";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.less']
})
export class CharacterCardComponent {
  @Input() character!: Character;

}
