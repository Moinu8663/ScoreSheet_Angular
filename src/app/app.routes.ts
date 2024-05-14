import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetResultComponent } from './get-result/get-result.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultComponent } from './result/result.component';
import { AddScoreComponent } from './add-score/add-score.component';
import { UpdateScoreComponent } from './update-score/update-score.component';
import { DeleteScoreComponent } from './delete-score/delete-score.component';

export const routes: Routes = [
    {path:'',component:GetResultComponent},
    {path:'Home',component:HomeComponent},
    {path:'Getresult',component:GetResultComponent},
    {path:'Result',component:ResultComponent},
    {path:'Resultlist',component:ResultListComponent},
    {path:'Addscore',component:AddScoreComponent},
    {path:'Update',component:UpdateScoreComponent},
    {path:'Delete',component:DeleteScoreComponent},
];