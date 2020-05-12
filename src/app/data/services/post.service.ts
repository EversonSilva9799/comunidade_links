import { Injectable } from '@angular/core';
import Post from '../models/Post';
import Response from '../models/Response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public index(): Observable<Response> {
    return this.http.get<Response>(`${this.apiService.url}/api/posts`);
  }

  public get(link: string): Observable<Response> {
    return this.http.get<Response>(`${this.apiService.url}/api/posts/${link}`);
  }
}
