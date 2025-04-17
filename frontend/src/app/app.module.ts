import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseService } from './expense.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClientheaderComponent } from './client/clientheader/clientheader.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AddExpenseComponent } from './client/add-expense/add-expense.component';
import { ListExpenseComponent } from './client/list-expense/list-expense.component';
import { CheckExpenseComponent } from './client/check-expense/check-expense.component';
import { ClientLoginGuardService } from './guard/client-login-guard.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutusComponent,
    ClientheaderComponent,
    AppheaderComponent,
    AddExpenseComponent,
    ListExpenseComponent,
    CheckExpenseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    ExpenseService,
    ClientLoginGuardService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
