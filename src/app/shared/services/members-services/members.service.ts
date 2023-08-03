import { Injectable } from '@angular/core';
import { member } from '../../../interfaces/types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError ,Observer, tap, catchError} from 'rxjs';
import { FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';


@Injectable({
  providedIn: 'root'
})

export class MembersService {

  constructor(private httpClient:HttpClient,
    private firebaseTSFirestore:FirebaseTSFirestore,
    private http:HttpClient
    ) {}

  private url = "http://localhost:3000"



  getMembers():Observable<member[]>{
    return this.http.get<member[]>(`${this.url}/members`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMember(id: number): Observable<member> {
    return this.http.get<member>(`${this.url}/members/${id}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );

  }

  handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
