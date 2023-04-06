import { Injectable } from '@angular/core';
import { Cocktail } from './model/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  private array: Cocktail[]

  constructor() { 

    this.array=[];
    this.array.push(new Cocktail("punch",15, "https://assets.afcdn.com/recipe/20180621/79734_origin.jpg"));
    this.array.push(new Cocktail("margaritha",10, "https://bakeitwithlove.com/wp-content/uploads/2021/09/Vodka-Margarita-sq.jpg.webp"));
    this.array.push(new Cocktail("pastis",5, "https://saviezvous.fr/wp-content/uploads/2018/06/pastis-51.jpg"));
    this.array.push(new Cocktail("perroquet",6, "https://www.la-pastisserie.fr/modules/smartblog/views/img/4-home-default.jpg"));
    this.array.push(new Cocktail("mojito",3, "https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg"));
  }
  
  public getCocktails(): Cocktail[] {

    return this.array;
  }}
