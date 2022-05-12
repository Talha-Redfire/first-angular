import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserAuthModule} from "./user-auth/user-auth.module";
import { MakeAndCallFunctionComponent } from './make-and-call-function/make-and-call-function.component';
@NgModule({
  declarations: [AppComponent, UserListComponent, MakeAndCallFunctionComponent, ],
  imports: [BrowserModule, AppRoutingModule,UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
