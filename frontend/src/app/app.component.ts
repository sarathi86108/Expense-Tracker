import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn: boolean = false;
  constructor(
    private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (typeof localStorage === 'undefined') {
        return;
      }
      const uid = localStorage.getItem("uId");
      if (uid !== null) {
        setTimeout(() => {
          this.isLoggedIn = true;
        }, 100);
      } else {
        setTimeout(() => {
          this.isLoggedIn = false;
        }, 100);
      }
    });
  }
}
