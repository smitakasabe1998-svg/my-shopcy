import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { LoanApplication } from './pages/loan-application/loan-application';
import { LoanapplicationList } from './pages/loanapplication-list/loanapplication-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'newApp',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: Product
    },
    {
        path: 'newApp',
        component: LoanApplication
    },
    {
        path: 'list',
        component: LoanapplicationList
    }
];
