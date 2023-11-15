import {NgModule} from '@angular/core';
import {authGuard} from "./guards/auth.guard";
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {RecipeComponent} from "./components/recette/recipe.component";
import {CountryRecipeComponent} from "./components/country-recipe/country-recipe.component";
import {HomeComponent} from "./components/home/home.component";
import {FavorisComponent} from "./components/favoris/favoris.component";
import {GridGameComponent} from "./components/grid-game/grid-game.component";

const routes: Routes = [
  {path: "Home", component: HomeComponent},
  {path: "map", component: MapComponent},
  {path: "recipes", component: RecipesComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "profil", component: ProfilComponent, canActivate: [authGuard]},
  {path: "recipe-detail/:nom", component: RecipeComponent},
  {path: "country-recipe/:nom", component: CountryRecipeComponent},
  {path: "favoris", component: FavorisComponent, canActivate: [authGuard]},
  {path: "game", component: GridGameComponent, canActivate: [authGuard]},
  {path: "**", redirectTo: '/Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
