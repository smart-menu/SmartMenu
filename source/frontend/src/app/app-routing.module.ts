import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {SearchComponent} from './search/search.component';
import {RestaurantPageComponent} from './restaurant-page/restaurant-page.component';
import {DishComponent} from './dish/dish.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search/:restaurant/:location/:page', component: SearchComponent, pathMatch: 'full'},
  { path: 'restaurant/:id', component: RestaurantPageComponent },
  { path: 'dish/:id', component: DishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
