import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  providers:[RouterModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

}
