import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ExpenseService } from '../../expense.service';


@Component({
  selector: 'app-clientheader',
  templateUrl: './clientheader.component.html',
  styleUrls: ['./clientheader.component.css']
})
export class ClientheaderComponent {
  url: string = '/';
  username: string = '';
  constructor(
    private route: Router,
    private service: ExpenseService
  ) {
    const userInfo = localStorage.getItem('uname');
    if (userInfo !== null) {
      this.username = userInfo;
    }
  }


  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  gotourl(url: string): void {
    if (url === 'logout') {
      this.service.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
}
