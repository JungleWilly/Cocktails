import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

import { CocktailService } from '../../shared/services/cocktail.service';
@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css'],
})
export class CocktailEditComponent implements OnInit {
  public cocktail: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.cocktail = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: [''],
      ingredients: this.fb.array([]),
    });
  }

  get ingredients() {
    return <FormArray>this.cocktail.get('ingredients');
  }

  addIngredient(): void {
    (<FormArray>this.cocktail.get('ingredients')).push(
      this.fb.group({
        name: [''],
        quantity: [''],
      })
    );
  }

  createCocktail() {
    this.cocktailService.addCocktail(this.cocktail.value);
  }
}
