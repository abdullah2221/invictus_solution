import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QouteService {
  private api = 'https://api.invictussolutions.co/api/free/consultation';

  constructor(private http: HttpClient) {}

  PostMessage(input: any): Observable<string> {
    return this.http.post<string>(this.api, input, { responseType: 'text' as 'json' });
  }
}
