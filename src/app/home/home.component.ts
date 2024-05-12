import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule,RouterOutlet,RouterModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
