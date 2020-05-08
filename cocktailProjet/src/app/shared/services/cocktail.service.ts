import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail(
      'Mojito',
      'https://www.papillesetpupilles.fr/wp-content/uploads/2006/07/Mojito-%C2%A9sanneberg-shutterstock.jpg',
      'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche.',
      [
        new Ingredient('perrier', 1),
        new Ingredient('citron', 2),
        new Ingredient('sucre', 3),
      ]
    ),
    new Cocktail(
      'Margarita',
      'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/margarita-2037408/9397186-12-fre-FR/Margarita.jpg',
      "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila",
      [
        new Ingredient('limonade', 1),
        new Ingredient('citron', 2),
        new Ingredient('sel', 3),
      ]
    ),
    new Cocktail(
      'Sour',
      'https://www.liquor.com/thmb/FOxNhdl-uze1SJNI5hzc83aJ13c=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__11__06162314__amaretto-sour-720x720-recipe-89a34cc23d294def8602ae1054b9f403.jpg',
      "Traduit de l'anglais-Un aigre est une famille traditionnelle de boissons mélangées. Des exemples courants de sours sont la margarita et le side-car. Les sours appartiennent à l'une des anciennes familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks.",
      [new Ingredient('perrier', 1), new Ingredient('jus de fraise', 2)]
    ),
  ]);

  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(
      new Cocktail(
        cocktail.name,
        cocktail.img,
        cocktail.desc,
        cocktail.ingredients.map(
          (ingredient) => new Ingredient(ingredient.name, ingredient.quantity)
        )
      )
    );
    this.cocktails.next(cocktails);
  }

  constructor() {}
}
