import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserAuthModule} from "./user-auth/user-auth.module"
@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule,UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
