import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API URL from environment
  private apiURL = 'https://api.invictussolutions.co/';

  constructor(private http: HttpClient) {}

  //  Create a method for headers (extendable in the future)
  private getHeaderOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
  }

  //  GET Method
  public get(endpoint: string): Observable<any> {
    const url = `${this.apiURL}${endpoint}`;
    return this.http.get<any>(url, this.getHeaderOptions()).pipe(
      tap(() => console.log(`GET Request to: ${url}`)), //  Debugging (optional)
      catchError(err => {
        console.error('GET Error:', err); //  Logs error for debugging
        return throwError(() => err);
      })
    );
  }

  // POST Method
  public post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiURL}${endpoint}`;
    return this.http.post<any>(url, data, this.getHeaderOptions()).pipe(
      tap(() => console.log(`POST Request to: ${url} with data`, data)), //  Debugging (optional)
      catchError(err => {
        console.error('POST Error:', err); // Logs error for debugging
        return throwError(() => err);
      })
    );
  }
}
