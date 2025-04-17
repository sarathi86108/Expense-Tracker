import { Component } from '@angular/core';
import { ExpenseService } from '../../expense.service';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  expName: string = '';
  remarks: string = '';
  date: any;
  expenseAmount: number = 0;
  isEdit: boolean = false;
  eid: any;
  constructor(
    private serice: ExpenseService,
    private activatedRouter: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.activatedRouter.params.subscribe((res: any) => {
      if (res?.id) {
        this.isEdit = true;
        this.getExpenseById(res?.id);
      } else {
        this.isEdit = false;
      }
    });
  }

  getExpenseById(id: any): void {
    this.serice.getExpenseById(id).pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>####' , res);
      if (res && res?.eid) {
        this.eid = res?.eid;
        this.expName = res?.expName;
        this.expenseAmount = res?.expAmount;
        this.remarks = res?.remarks;
        this.date = this.datePipe.transform(new Date(res?.date), 'yyyy-MM-dd');
      }
    });
  }
  onSubmit(): void {
    if (this.expName === '') {
     alert('Expense Name should not be blank');
    return;
    }
    if (this.expName.length < 4) {
      alert('Expense name atleast 4 character');
      return;
    }
    const expensePartten = /[A-Za-z]+$/;
      if (!expensePartten.test(this.expName)) {
      alert ('expense should not contain 1 letter');
      return;
      }
      if (this.expenseAmount<=0){
        alert('amount has to be greater than 0');
        return;
      }
      if (this.remarks.length<=4){
        alert('remark should have atlest 4 letters');
        return;
      }
      if (this.date==''){
        alert('date is required ');
        return;
      }
    const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? '');
    const payload: any = {
      expName: this.expName,
      remarks: this.remarks,
      date: new Date(this.date).getTime(),
      expAmount: this.expenseAmount,
      user: userInfo
    };
    if (this.isEdit === false) {
      this.serice.addExpense(payload).pipe(take(1)).subscribe((res: any) => {
        if (res && res?.eid) {
          alert('Expense Added Successfully');
          this.serice.navigate('list-expense');
        }
      })
    } else {
      payload.eid = this.eid;
      this.serice.updateExpense(payload).pipe(take(1)).subscribe((res: any) => {
        if (res && res?.eid) {
          alert('Expense updated Successfully');
          this.serice.navigate('list-expense');
        }
      })
    }
    

  }
}
