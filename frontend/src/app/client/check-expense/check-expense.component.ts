
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../expense.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-check-expense',
  templateUrl: './check-expense.component.html',
  styleUrls: ['./check-expense.component.css']
})
export class CheckExpenseComponent implements OnInit {
  expenseList: any[] = [];
  allExpenseList: any[] = [];
  date: any;  // Holds the selected month and year
  budgetLimit: number = 2000;
  totalExpense: number = 0;

  constructor(private service: ExpenseService) {}

  ngOnInit(): void {
    // Set the current date to the current month (default)
    const currentDate = new Date();
    this.date = currentDate.toISOString().substr(0, 7);  // Format as YYYY-MM (e.g., 2025-04)
    
    // Fetch the expense list and filter for the current month
    this.getExpenseList();
  }

  getExpenseList(): void {
    const uid = localStorage.getItem('uId');
    this.service.listExpense(uid).pipe(take(1)).subscribe((res) => {
      this.allExpenseList = res;
      this.filterExpensesByDate(); // Filter expenses for the current month
    }, (err: any) => {
      console.log('Error while getting expense list');
    });
  }

  filterExpensesByDate(): void {
    this.totalExpense = 0;
    // Filter expenses based on the selected month
    this.expenseList = this.allExpenseList?.filter((item: any) => {
      const recordDate = new Date(item?.date);
      const selectedDate = new Date(this.date);
      
      // Check if the record's month and year match the selected date's month and year
      if (selectedDate.getMonth() === recordDate.getMonth() && selectedDate.getFullYear() === recordDate.getFullYear()) {
        this.totalExpense += item?.expAmount;
        return item;
      }
    });
  }

  dateChange(ev: any): void {
    // When the date changes, filter the expenses based on the new month
    this.filterExpensesByDate();
  }
}

