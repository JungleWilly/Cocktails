import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css'],
})
export class CocktailEditComponent implements OnInit {
  public cocktail: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cocktail = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: [''],
    });
  }

  createCocktail() {
    console.log(this.cocktail);
  }
}
