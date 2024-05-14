import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule  } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { ScoresheetServiceService } from '../Service/scoresheet-service.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-score',
  standalone: true,
  imports: [MatGridListModule,MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule,FormsModule, ReactiveFormsModule,CommonModule,RouterModule],
  providers:[ScoresheetServiceService,HttpClient,AuthService],
  templateUrl: './add-score.component.html',
  styleUrl: './add-score.component.css'
})
export class AddScoreComponent implements OnInit {
  addscore!: FormGroup;
  constructor(private formBuilder: FormBuilder, private scoreservice: ScoresheetServiceService, private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    this.addscore = this.formBuilder.group({
      RollNo: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Marks1: ['', [Validators.required]],
      Marks2: ['', [Validators.required]],
      Marks3: ['', [Validators.required]]
    });
    this.auth.canAuthenticate();
  }

  onSubmit() {
    if (this.addscore.valid) {
      const userData = this.addscore.value;

      this.scoreservice.AddScore(userData).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem("RollNo", userData.RollNo);
          // Handle success, e.g., show a success message to the user
        });
      alert("Add Score Successfully");
      this.addscore.reset();
      this.router.navigate(['/Getresult']);
    }
  }
}
