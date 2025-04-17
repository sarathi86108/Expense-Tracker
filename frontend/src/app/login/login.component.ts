import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showForgotPassword: boolean = false;
  isFormSubmitted: boolean = false;
  loginForm = new FormGroup<any>({});
  constructor(private expenseService: ExpenseService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }



  onSubmit() {
    this.email = this.loginForm.controls['email'].value;
    this.password = this.loginForm.controls['password'].value;
    const payload = {
      username: this.email,
      password: this.password
    };
    this.expenseService.loginUser(payload).subscribe(
      (response: any) => {
        if (response && response?.id) {
          console.log("***response****", response);
          this.expenseService.storeLoggedInUser(response);
          localStorage.setItem('userInfo', JSON.stringify(response));
          localStorage.setItem('uname', response?.username);
          localStorage.setItem('uId', response?.id);
          this.router.navigate(['/clienthome']);
        }
      },
      (error: any) => {
        console.error('Login failed:', error);
        console.log('>>>>>>>>>>>>>>>>>>', error?.error?.message);
      }
    );
  }

  resetForm() {
    this.email = '';
    this.password = '';
  }

}

