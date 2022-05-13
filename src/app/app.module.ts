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
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { TodoListInAngularComponent } from './todo-list-in-angular/todo-list-in-angular.component';
import { SendDataParentToChildComponentComponent } from './send-data-parent-to-child-component/send-data-parent-to-child-component.component';
import { SendDataChildToParentComponentComponent } from './send-data-child-to-parent-component/send-data-child-to-parent-component.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { BasicOfPipesComponent } from './basic-of-pipes/basic-of-pipes.component';
import { AdvancedPipesComponent } from './advanced-pipes/advanced-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
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
    TodoListInAngularComponent,
    SendDataParentToChildComponentComponent,
    SendDataChildToParentComponentComponent,
    TwoWaybindingComponent,
    TemplateReferenceVariableComponent,
    BasicOfPipesComponent,
    AdvancedPipesComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
