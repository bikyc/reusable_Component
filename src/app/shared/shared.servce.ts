import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactUs } from './contactus.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private apiUrl = 'http://your-backend-url/api/contact'; // backend API URL

  constructor(private http: HttpClient) { }

  sendEmail(ContactUs:ContactUs): Observable<any> {
    return this.http.post<any>(this.apiUrl, ContactUs);
  }
}
