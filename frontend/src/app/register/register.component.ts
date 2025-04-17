import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ExpenseService } from '../expense.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errorMessage: string  = '';
  username: string = '';
  password: string = '';

  constructor(private expenseService: ExpenseService, private router: Router ) {
 
  }
 
  onSubmit() {
    if (this.username === '') {
      this.errorMessage = 'Username should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
   
    if (this.password === '' ) {
      this.errorMessage = 'Password should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const regularExpression = /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    if (!regularExpression.test(this.username)) {
      document.getElementById('errordiv')?.scrollIntoView(true);
      this.errorMessage = 'Email is not valid';
      return;
    }
    this.errorMessage = '';
    const payload = {
      username: this.username,
      password: this.password
    };
    this.expenseService.registerUser(payload).pipe(take(1)).subscribe(
      (data:any ) => {
        alert("User created with account");
        this.router.navigate(['/login']);
      }, error => {
          alert("Something went wrong while registration.");
      }
    )
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
