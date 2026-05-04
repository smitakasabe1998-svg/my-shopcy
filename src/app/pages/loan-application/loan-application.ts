import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from '../../app';
import { apiREsponse, Application, Loan } from '../../model/app.model';
import { Master } from '../../sevice/master';

@Component({
  selector: 'app-loan-application',
  imports: [FormsModule],
  templateUrl: './loan-application.html',
  styleUrl: './loan-application.css',
})
export class LoanApplication {

  application: Application = new Application();
  loan: Loan = new Loan();

  mastersrv = inject(Master)

  addLoan() {
    const strObj = JSON.stringify(this.loan);
    const newOb = JSON.parse(strObj)
    this.application.loans.push(newOb)
  }

  submitApplication(){
    this.mastersrv.addNewapp(this.application).subscribe((Result:apiREsponse)=>{
if (Result.Result){
  alert('application success')
}else{
  alert(Result.Message)
}
    }, error =>{
      alert(error)

    })
  }
}
