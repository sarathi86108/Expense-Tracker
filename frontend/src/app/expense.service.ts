import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private url = 'http://localhost:8080';
  private loggedInUser: any;
  constructor(private http: HttpClient, private router: Router) { }
  //@RequestMapping("/api/users")
  // @PostMapping("/register")
  // public User registerUser(@RequestBody User user) {
  //     return userRepository.save(user);
  // }

  // @PostMapping("/login")
  // public User loginUser(@RequestBody User user) {
  //     return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).orElse(null);
  // }


  loginUser(user: any): Observable<any> {
    console.log('Sending login request with credentials:', user);
    return this.http.post(`${this.url}/api/users/login`, user).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response);
      })
    );
  }

  navigateToLink(arg0: string) {
    this.router.navigate(['/' + arg0]);
  }

  storeLoggedInUser(user: any) {
    this.loggedInUser = user;
  }

  public registerUser(user: any) {
    return this.http.post(`${this.url}/api/users/register`, user);
  }


  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  getUserById(userId: any): Observable<any> {
    return this.http.get<any>(`${this.url}/api/user/${userId}`);
  }

  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  updateUserInformation(id: any, user: any): Observable<any> {
    return this.http.put<any>(`${this.url}/api/user/update/${id}`, user);
  }

  navigate(url: string): void {
    this.router.navigate(['/' + url]);
  }

  addExpense(body: any): Observable<any> {
    return this.http.post(`${this.url}/api/expense`, body);
  }

  listExpense(id: any): Observable<any> {
    return this.http.get(`${this.url}/api/expense/getByUserId/${id}`);
  }
  deleteExpenseById(id: any): Observable<any> {
    return this.http.delete(`${this.url}/api/expense/${id}`, { responseType: 'text' });
  }
  updateExpense(expense: any): Observable<any> {
    return this.http.put(`${this.url}/api/expense/${expense?.eid}`, expense);
  }

  getExpenseById(id: any): Observable<any> {
    return this.http.get(`${this.url}/api/expense/${id}`);
  }
}
