import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isreset!: boolean;
  constructor(private router: Router, private http: HttpClient) { }
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }
  isReset(): boolean {
    return this.isreset;
  }

  canAccess() {
    if (!this.isAuthenticated()) {

      this.router.navigate(['/Getresult']);
    }
  }
  canAuthenticate() {
    if (this.isAuthenticated()) {

      this.router.navigate(['/Getresult']);
    }
  }
  ADD(RollNo: number, Name: string,) {

    return this.http.post<{ idToken: string }>('https://localhost:7274/ScoreSheet/AddScore', { displayName: RollNo, Name });
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  GET(RollNo: string, Name: string,) {

    return this.http.post<{ idToken: string }>('http://localhost:5103/ScoreSheet/GetResult', { displayName: RollNo, Name });
  }

  Reset(){
    this.isReset();
   }

  detail() {
    const token = sessionStorage.getItem('token');
    return this.http.post<{ scoresheets: Array<{ RollNo: string, Name: string }> }>('http://localhost:5103/ScoreSheet/GetResult',{ idToken: token });
  }

  removeToken() {
    sessionStorage.removeItem('token');
  }
}
