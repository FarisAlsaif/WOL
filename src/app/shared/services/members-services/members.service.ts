import { Injectable } from '@angular/core';
import { member } from '../../../interfaces/types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MembersService {

  constructor(private httpClient:HttpClient) { }

  private membersUrl = "api/members.json";


  getMembers():Observable<member[]>{
    return this.httpClient.get<member[]>(this.membersUrl).pipe(
      tap(data=>console.log('All: '+ JSON.stringify(data)),
      catchError(this.handleError)
      ));
  }
  getMember(id: number): Observable<member> {
    return this.getMembers().pipe(
      map((members: member[]) => members.find(m => m.id === id)),
      map((member: member | undefined) => {
        if (member) {
          return member; // Return the found member
        } else {
         
          throw new Error(`Member with id ${id} not found`);
        }
      }),
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
