import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ListExpenseComponent } from './client/list-expense/list-expense.component';
import { AddExpenseComponent } from './client/add-expense/add-expense.component';
import { CheckExpenseComponent } from './client/check-expense/check-expense.component';
import { ClientLoginGuardService } from './guard/client-login-guard.service';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'clienthome', component: ClienthomeComponent,  canActivate: [ClientLoginGuardService]},
  { path: 'list-expense', component: ListExpenseComponent ,  canActivate: [ClientLoginGuardService]},
  { path: 'add-expense', component: AddExpenseComponent ,  canActivate: [ClientLoginGuardService]},
  { path: 'check-expense', component: CheckExpenseComponent ,  canActivate: [ClientLoginGuardService]},
  { path: 'add-expense/:id', component: AddExpenseComponent ,  canActivate: [ClientLoginGuardService]},
 
];
//, canActivate: [ClientLoginGuardService]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
