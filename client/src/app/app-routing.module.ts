import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { MessageComponent } from './message/message.component';
import { AuthguardGuard } from './authguard.guard';
import { DetailComponent } from './detail/detail.component';
import { SellerdetailComponent } from './sellerdetail/sellerdetail.component';
import { UserComponent } from './user/user.component';
import { UsereditComponent } from './useredit/useredit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'productslist', component:ProductComponent},
  { path: 'products/new', component: NewComponent},
  { path: 'products/:id', component: DetailComponent},
  { path: 'products/edit/:id', component: EditComponent},
  { path: 'userprofile/:id', component: UserComponent},
  { path: 'user/edit/:id', component: UsereditComponent},
  { path: 'seller/:id', component: SellerdetailComponent},
  { path: 'login', component: LoginuserComponent},
  { path: 'signup', component: CreateuserComponent},
  { path: 'message', component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
