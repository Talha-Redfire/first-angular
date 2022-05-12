import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { MakeAndCallFunctionComponent } from './make-and-call-function/make-and-call-function.component';
import { ImportantEventsComponent } from './important-events/important-events.component';
import { MakeACounterComponent } from './make-acounter/make-acounter.component';
import { BasicRuleOfStyleComponent } from './basic-rule-of-style/basic-rule-of-style.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseConditionComponent } from './if-else-condition/if-else-condition.component';
import { SwitchCasesinAngularComponent } from './switch-casesin-angular/switch-casesin-angular.component';
import { ForLoopInAngularComponent } from './for-loop-in-angular/for-loop-in-angular.component';
import { NestedLoopAngularComponent } from './nested-loop-angular/nested-loop-angular.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormsModule } from '@angular/forms';
import { FormInAngularComponent } from './form-in-angular/form-in-angular.component';
import { MaterialUiInAngularComponent } from './material-ui-in-angular/material-ui-in-angular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MakeAndCallFunctionComponent,
    ImportantEventsComponent,
    MakeACounterComponent,
    BasicRuleOfStyleComponent,
    PropertyBindingComponent,
    IfElseConditionComponent,
    SwitchCasesinAngularComponent,
    ForLoopInAngularComponent,
    NestedLoopAngularComponent,
    DynamicStyleComponent,
    HeaderComponentComponent,
    FormInAngularComponent,
    MaterialUiInAngularComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserAuthModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
