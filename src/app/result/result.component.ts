import { HttpClient } from '@angular/common/http';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterModule } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { ScoresheetServiceService } from '../Service/scoresheet-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,RouterModule,CommonModule],
  providers:[ScoresheetServiceService,HttpClient,AuthService],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{
  results:any;
  constructor( private scoreservice: ScoresheetServiceService, private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.scoreservice.GetResultByRollNo(String(localStorage.getItem("RollNo"))).subscribe(
      (data:any) =>{
        console.log(data);
        this.results = data;
      }
    )
    this.auth.canAuthenticate();
  }
  Reset(){
    this.auth.Reset();
    localStorage.removeItem("RollNo",)
    this.router.navigate(['/Getresult'])
  }
}
