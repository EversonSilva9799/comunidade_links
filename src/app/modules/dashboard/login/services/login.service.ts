import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/data/services/api.service';
import UserLogin from 'src/app/data/models/UserLogin';
import { Observable } from 'rxjs';
import Response from 'src/app/data/models/Response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public store(user: UserLogin): Observable<Response> {
    return this.http.post<Response>(`${this.apiService.url}/api/auth`, user)
  }

  public requestResetPass(email: string): Observable<Response> {
    return this.http.post<Response>(`${this.apiService.url}/api/account/reset`, { email });
  }

  public resetPassword(password: string, code: string): Observable<Response> {
    return this.http.put<Response>(`${this.apiService.url}/api/account/reset/${code}`, { password });
  }
}
