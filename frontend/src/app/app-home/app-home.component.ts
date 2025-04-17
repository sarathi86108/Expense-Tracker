import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  
  constructor(
    private router: Router
  ) {

  }

  openPage(str: string): void {
    this.router.navigate([str]);
  }
}
