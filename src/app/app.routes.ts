import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetResultComponent } from './get-result/get-result.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'Getresult',component:GetResultComponent},
    {path:'Result',component:ResultComponent},
    {path:'Resultlist',component:ResultListComponent},

];
