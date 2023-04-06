import { Component } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { Cocktail } from '../model/Cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
cocktails : Cocktail[];

  constructor(public cocktailServiceService: CocktailServiceService) { 
    this.cocktails = cocktailServiceService.getCocktails();
  }

}
