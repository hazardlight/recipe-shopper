import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeResolver } from './services/recipe-resolver.service';
import { RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    component: RecipesComponent,
    children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      {path: ':id', component: RecipeDetailComponent, resolve: {recipe: RecipeResolver} },
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
