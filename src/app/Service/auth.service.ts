import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }
  isAuthenticated():boolean
  {
    if (sessionStorage.getItem('token')!==null) {
      return true;
  }
  return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
 
        this.router.navigate(['/Getresult']);
    }
  }
  canAuthenticate(){
    if (this.isAuthenticated()) {
     
      this.router.navigate(['/Home']);
    }
  }
//   register(First_name:string,Mobile_No:string,Password:string){
       
//     return this.http
//      .post<{idToken:string}>(
//        'https://localhost:7252/api/User/Register',
//          {displayName:First_name,Mobile_No,Password}
//      );
//  }

 storeToken(token:string){
     sessionStorage.setItem('token',token);
 }

 GET(RollNo:string,Name:string,){
  
     return this.http.post<{idToken:string}>(
         'http://localhost:5103/ScoreSheet/GetResult',
           {RollNo,Name}
     ) ;
     
 }


 detail(){
   let token = sessionStorage.getItem('token');

   return this.http.post<{scoresheets:Array<{RollNo:string,Name:string}>}>(
       'http://localhost:5103/ScoreSheet/GetResult',
       {idToken:token}
   );
 }

 removeToken(){
   sessionStorage.removeItem('token');
 }
}
