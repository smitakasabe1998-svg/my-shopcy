export class Loan {
  loanID: number = 0;
  applicantID: number = 0;
  bankName: string = '';
  loanAmount: number = 0;
  emi: number = 0;

  constructor(init?: Partial<Loan>) {
    Object.assign(this, init);
  }
}

export class Application {
  applicantID: number = 0;
  fullName: string = '';
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
  dateApplied: string = '';
  customerId: number = 0;
  loans: Loan[] = [];

  constructor(init?: Partial<Application>) {
    Object.assign(this, init);
  }
}