import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from "./components/map/map.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipesComponent} from './components/recipes/recipes.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ProfilComponent} from './components/profil/profil.component';
import {RecipeComponent} from './components/recette/recipe.component';
import {CustomFilterPipe} from './pipe/custom-filter.pipe';
import {CountryRecipeComponent} from './components/country-recipe/country-recipe.component';
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home/home.component";
import {SlideComponent} from "./components/home/slide/slide.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FavorisComponent} from './components/favoris/favoris.component';
import {NgOptimizedImage} from "@angular/common";
import {CommentComponent} from './components/recette/comment/comment.component';
import {PopupComponent} from './components/recette/popup/popup.component';
import {NgParticlesModule} from "ng-particles";
import {SnackGameComponent} from './components/grid-game/snack-game/snack-game.component';
import {GridGameComponent} from './components/grid-game/grid-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RecipesComponent,
    LoginComponent,
    RegistrationComponent,
    ProfilComponent,
    RecipeComponent,
    CustomFilterPipe,
    HeaderComponent,
    HomeComponent,
    SlideComponent,
    FooterComponent,
    CountryRecipeComponent,
    FavorisComponent,
    CommentComponent,
    PopupComponent,
    SnackGameComponent,
    GridGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
