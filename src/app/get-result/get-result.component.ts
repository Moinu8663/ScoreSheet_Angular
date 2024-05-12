import { Component, OnInit } from '@angular/core';
import { ScoresheetServiceService } from '../Service/scoresheet-service.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-get-result',
  standalone: true,
  imports: [MatGridListModule,
    MatFormFieldModule,
     MatInputModule,
      MatIconModule,
      MatSelectModule,
      FormsModule,
       ReactiveFormsModule,
       CommonModule,
       RouterModule],
  providers:[ScoresheetServiceService,HttpClient,AuthService],
  templateUrl: './get-result.component.html',
  styleUrl: './get-result.component.css'
})
export class GetResultComponent implements OnInit {

  GetResultForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private scoreservice:ScoresheetServiceService, private router: Router,private auth: AuthService) { }


  ngOnInit(): void {
  this.GetResultForm = this.formBuilder.group(
    {
      RollNo:['',[Validators.required]],
      Name:['',[Validators.required]]
    }
  );
  this.auth.canAuthenticate();
  }
  OnSubmit()
  {
    if(this.GetResultForm.valid)
      {
        const data = this.GetResultForm.value;
        this.scoreservice.GetResult(data).subscribe(
          (response) => {
            console.log(response);
            localStorage.setItem("RollNo",data.RollNo);
            this.GetResultForm.reset();
            this.router.navigate(['/Result']);
          }
        )
      }
  }

}
