import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { section} from 'src/app/interfaces/types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private httpClient:HttpClient) { }

  private sectionsUrl = "api/sections.json";

  getSections():Observable<section[]>{
    return this.httpClient.get<section[]>(this.sectionsUrl);
  }
}
