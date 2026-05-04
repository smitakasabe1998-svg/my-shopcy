export class Loan {
  loanID: number = 0;
  applicantID: number = 0;
  bankName: string = '';
  loanAmount: number = 0;
  emi: number = 0;

  constructor() {
    this.bankName = '';
    this.emi = 0;
    this.loanAmount = 0;
    this.loanID = 0;
    this.applicantID = 0;
  }
}

export class Application {
  applicantID: number = 0;
  fullName: string = '';
  phoneNumber: number = 0;
  applicationStatus: string = '';
  panCard: string = '';
  dateOfBirth: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';
  annualIncome: number = 0;
  employmentStatus: string = '';
  creditScore: number = 0;
  assets: string = '';
  dateApplied: Date;
  customerId: number = 0;
  loans: Loan[] = [];

  constructor(){
 this.applicationStatus = "New";
this.dateApplied = new Date();
this.loans = [];
this.address = '';  
this.annualIncome = 0;
this.city = '';
this.creditScore = 0;
this.dateOfBirth = '';
this.email = '';
this.employmentStatus = '';
this.fullName = '';
this.panCard = '';
this.phone = '';
this.state = '';
this.zipCode = '';  
  }

  // constructor(init?: Partial<Application>) {
  //   Object.assign(this, init);
  // }
}

export interface apiREsponse {

  Message: string,
  Result: boolean,
  Data: any


}