import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResultModule { 
  RollNo!:number;
  Name!: string;
  Marks1!: number;
  Marks2!: number;
  Marks3!: number;
  Total_Marks!:number;
  Score!:number;
  Grade!:string;
  Result!:string
}
