import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Router, RouterModule } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { ScoresheetServiceService } from '../Service/scoresheet-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-score',
  standalone: true,
  imports: [MatGridListModule,MatFormFieldModule, MatInputModule, MatButtonModule,FormsModule, ReactiveFormsModule,CommonModule,RouterModule],
  providers:[HttpClient,ScoresheetServiceService,AuthService],
  templateUrl: './update-score.component.html',
  styleUrl: './update-score.component.css'
})
export class UpdateScoreComponent  implements OnInit{
  update!:FormGroup;
  data!:any;
  RollNo:any;
  constructor(private formBuilder: FormBuilder, private scoreservice: ScoresheetServiceService, private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.update = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Marks1: ['', [Validators.required]],
      Marks2: ['', [Validators.required]],
      Marks3: ['', [Validators.required]]
    });
    this.auth.canAuthenticate();
  }
  Onupdate() {
    if (this.update.valid) 
    {
        const data = this.update.value;

        this.scoreservice.Update(String(localStorage.getItem("RollNo")),data).subscribe(data => 
      {
        console.log(data);
        this.data =data;
        localStorage.setItem("RollNo",this.RollNo);
      });
      alert("Update Successfully");
        this.update.reset();
        this.router.navigate(['/Result']);

    }
  }
}





