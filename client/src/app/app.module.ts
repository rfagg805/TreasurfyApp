import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { AuthguardGuard } from './authguard.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { Router } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { ValidateEqualDirective } from './validate-equal.directive';
import { MessageComponent } from './message/message.component';

import { ChatService } from './chat.service';
import { AgmCoreModule } from '@agm/core';
import { DetailComponent } from './detail/detail.component';
import { SellerdetailComponent } from './sellerdetail/sellerdetail.component';
import { UserComponent } from './user/user.component';
import { UsereditComponent } from './useredit/useredit.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EditComponent,
    NewComponent,
    CreateuserComponent,
    LoginuserComponent,
    ValidateEqualDirective,
    MessageComponent,
    DetailComponent,
    SellerdetailComponent,
    UserComponent,
    UsereditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDvj90Xz3fgsv1sQ1eWSsNr0lvXNnvF2Ys'
    })
  ],
  providers: [HttpService,AuthguardGuard,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
