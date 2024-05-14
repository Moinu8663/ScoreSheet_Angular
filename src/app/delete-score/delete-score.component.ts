import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {Router, RouterModule } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { ScoresheetServiceService } from '../Service/scoresheet-service.service';

@Component({
  selector: 'app-delete-score',
  standalone: true,
  imports: [MatGridListModule,MatFormFieldModule, MatInputModule, MatButtonModule,FormsModule, ReactiveFormsModule,CommonModule,RouterModule],
  providers:[HttpClient,ScoresheetServiceService,AuthService],
  templateUrl: './delete-score.component.html',
  styleUrl: './delete-score.component.css'
})
export class DeleteScoreComponent {
  Delete!:FormGroup;
  data!:any;
  constructor(private formBuilder: FormBuilder, private scoreservice: ScoresheetServiceService, private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.Delete = this.formBuilder.group({
      RollNo: ['', [Validators.required]],
    });
    this.auth.canAuthenticate();
  }
  OnDelete() {
    if (this.Delete.valid) 
    {
        this.scoreservice.Delete(String(localStorage.getItem("RollNo"))).subscribe(data => 
      {
        console.log(data);
        this.data =data;
        localStorage.clear();
      })
      alert("Delete Successfully")
        this.Delete.reset();
        this.router.navigate(['/Getresult']);

    }
  }
}
