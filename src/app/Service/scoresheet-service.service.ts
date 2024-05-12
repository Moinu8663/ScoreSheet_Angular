import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetresultmoduleModule } from '../Modules/getresultmodule/getresultmodule.module';

@Injectable({
  providedIn: 'root'
})
export class ScoresheetServiceService {

  constructor(private http: HttpClient) { }
  // AddUser(userobj:LoginModelModule)
  // {
  //   return this.http.post('https://localhost:7252/api/User/Login',userobj);
  // }
  // GetUsers():Observable<UserModule[]>
  // {
  //   return this.http.get<UserModule[]>('https://localhost:7252/api/User');
  // }
  // GetUserByMobileNo(Mobile_No:string ):Observable<UserModule[]>
  // {
  //   return this.http.get<UserModule[]>('https://localhost:7252/api/User/'+Mobile_No )
  // }
  GetResult( user:GetresultmoduleModule){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:5103/ScoreSheet/GetResult',user,{headers});
  }
}
