import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://api.invictussolutions.co/api/contact'

  private http:HttpClient = inject(HttpClient)

  PostMessage(input:any):Observable<string>{
    return this.http.post(this.api, input,{responseType:'text'});
  }

  constructor() { }
}
