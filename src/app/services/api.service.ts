import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiURL =  'https://api.invictussolutions.co/';

  private get headers() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  // GET Method
  public get(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}${endpoint}`, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }

  // POST Method
  public post(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}${endpoint}`, data, { headers: this.headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}