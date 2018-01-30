import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { Router } from '@angular/router';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'product', component:ProductComponent},
  { path: 'product/new', component: NewComponent},
  { path: 'product/edit/:id', component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
