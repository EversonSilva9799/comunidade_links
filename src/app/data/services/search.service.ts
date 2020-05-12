import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Post from '../models/Post'
import { HttpClient } from '@angular/common/http';
import Response from '../models/Response';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public get(word: string): Observable<Response> {
    return this.http.get<Response>(`${this.apiService.url}/api/posts?search=${word}`);
  }
}
