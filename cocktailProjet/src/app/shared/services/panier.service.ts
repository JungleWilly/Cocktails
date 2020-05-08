import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<
    Ingredient[]
  >(null);

  addIngredients(ingredients: Ingredient[]): void {
    const currentvalue = this.panier.value;
    if (currentvalue && currentvalue.length) {
      this.panier.next(currentvalue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }

  constructor() {}
}
