import { Component, input } from '@angular/core';
import { House } from '../services/houses';

@Component({
  imports: [],
  selector: 'app-housecard',
  styleUrl: './housecard.css',
  templateUrl: './housecard.html',
})
export class Housecard {

  house = input.required<House>()

}
