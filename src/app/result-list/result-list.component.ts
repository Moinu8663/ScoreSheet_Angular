import { HttpClient } from '@angular/common/http';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ScoresheetServiceService } from '../Service/scoresheet-service.service';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [MatCardModule,RouterModule,CommonModule],
  providers:[ScoresheetServiceService,HttpClient,AuthService,],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.css'
})
export class ResultListComponent implements OnInit{

  constructor( private scoreservice: ScoresheetServiceService, private auth: AuthService) { }
  data: any[] = [];
  ngOnInit(): void {
    this.scoreservice.GetAll().subscribe(
      (data:any) =>{
        console.log(data);
        this.data = data;
      }
    )
    this.auth.canAuthenticate();
  }
}
