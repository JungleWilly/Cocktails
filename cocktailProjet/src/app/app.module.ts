import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRouting } from './app-routing.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from './cocktail-container/cocktail.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ActiveDirective],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    CocktailModule,
  ],
  providers: [PanierService],
  bootstrap: [AppComponent],
})
export class AppModule {}
