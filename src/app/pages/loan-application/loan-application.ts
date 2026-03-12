import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from '../../app';
import { Application, Loan } from '../../model/app.model';

@Component({
  selector: 'app-loan-application',
  imports: [FormsModule],
  templateUrl: './loan-application.html',
  styleUrl: './loan-application.css',
})
export class LoanApplication {

  application : Application = new Application();
  loan : Loan = new Loan();

  addLoan() {
this.application.loans.push(this.loan)
  }
}
