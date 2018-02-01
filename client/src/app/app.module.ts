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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
