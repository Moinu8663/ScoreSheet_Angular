import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetresultmoduleModule } from '../Modules/getresultmodule/getresultmodule.module';
import { ScoreModuleModule } from '../Modules/score-module/score-module.module';
import { ResultModule } from '../Modules/result/result.module';

@Injectable({
  providedIn: 'root'
})
export class ScoresheetServiceService {

  constructor(private http: HttpClient) { }
  //for registrtion and add new method
  AddScore(score: ScoreModuleModule) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://localhost:7274/ScoreSheet/AddScore', score, { headers });
  }
  //get all score sheet 
  GetAll():Observable<ResultModule[]>
  {
    return this.http.get<ResultModule[]>('https://localhost:7274/ScoreSheet');
  }
  // get rollno score sheet 
  GetResultByRollNo(RollNo:string ):Observable<ResultModule[]>
  {
    return this.http.get<ResultModule[]>('https://localhost:7274/ScoreSheet/'+RollNo )
  }
  //for login method 
  GetResult( user:GetresultmoduleModule){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('https://localhost:7274/ScoreSheet/GetResult',user,{headers});
  }
  //for update score
  Update(RollNo:string,user:ResultModule)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put('https://localhost:7274/ScoreSheet/'+RollNo, user,{headers})
  }
  //for delete score
  Delete(RollNo:string)
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete('https://localhost:7274/ScoreSheet/'+RollNo,{headers})
  }
}