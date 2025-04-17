import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})
export class ClienthomeComponent {
  searchText: string = '';
  constructor(
       private router: Router
  ) {}

  ngOnInit(): void {
  
  }
}
