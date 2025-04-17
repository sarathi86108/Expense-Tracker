import { Component } from '@angular/core';
import { ExpenseService } from '../../expense.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent {
  allExpenseList: any[] = [];
  expenseList: any[] = [];
  filter: any = "all";
  constructor(
    private service: ExpenseService
  ) {
    this.getExpenseList();
  }

  getExpenseList(): void {
    const uid = localStorage.getItem('uId');
    this.service.listExpense(uid).pipe(take(1)).subscribe((res) => {
      this.expenseList = res;
      this.allExpenseList = res;
    }, (err: any) => {
      console.log('Error while getting expense list');
    })
  }

  editExpense(expense: any): void {
    this.service.navigate(`/add-expense/${expense?.eid}`);
  }

  deleteExpense(expense: any): void {
    this.service.deleteExpenseById(expense?.eid).pipe(take(1)).subscribe(() => {
      alert("Expense deleted successfully");
      this.getExpenseList();
    });
  }

  onChange(): void {
    console.log('>>>>>>>>>>>>', this.filter)
    if (this.filter === 'all') {
      this.expenseList = this.allExpenseList;
    } else if(this.filter === 'month') {
      const currentDate = new Date();
      this.expenseList = this.allExpenseList?.filter((item: any) => {
        const recordDate = new Date(item?.date)
        if (currentDate.getMonth() + 1 === recordDate.getMonth() + 1 && currentDate.getFullYear() === recordDate?.getFullYear()) {
          return item;
        }
      });
    }  else if(this.filter === 'week') {
      const today = new Date();
  
      const dayOfWeek = today.getDay();
      const diffToMonday = (dayOfWeek + 6) % 7;
      const monday = new Date(today);
      monday.setDate(today.getDate() - diffToMonday);
      monday.setHours(0, 0, 0, 0);
    
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      sunday.setHours(23, 59, 59, 999);

      this.expenseList = this.allExpenseList?.filter((item: any) => {
        const recordDate = new Date(item?.date)
        if (recordDate >= monday && recordDate <= sunday) {
          return item;
        }
      });
    }
  }
}
