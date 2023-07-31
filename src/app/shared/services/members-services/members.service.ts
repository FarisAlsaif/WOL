import { Injectable } from '@angular/core';
import { member } from '../../../interfaces/types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError ,Observer} from 'rxjs';
import { FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';


@Injectable({
  providedIn: 'root'
})

export class MembersService {

  constructor(private httpClient:HttpClient,
    private firebaseTSFirestore:FirebaseTSFirestore,
    ) {}

  private membersUrl = "api/members.json";


  getMembers():Observable<member[]>{

    return new Observable<member[]>((observer: Observer<member[]>) => {
      this.firebaseTSFirestore.getCollection({
        path: ["members"],
        onComplete: (result) => {
          const members: member[] = <member[]>result.docs.map((doc) => doc.data());
          observer.next(members); // Emit the members array
          observer.complete(); // Complete the observable
        },
        onFail: (error) => {
          console.log(error);
          observer.error(error); // Emit the error
        },
        where: []
      });
    });

  }

  getMember(id: number): Observable<member> {
    return new Observable<member>((observer: Observer<member>) => {
      this.firebaseTSFirestore.getDocument({
        path: ["members", "1"],
        onComplete: (result) => {
          const member: member = <member>result.data();
          observer.next(member); // Emit the member object
          observer.complete(); // Complete the observable
        },
        onFail: (error) => {
          console.log(error);
          observer.error(error); // Emit the error
        },
      });
    });
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
