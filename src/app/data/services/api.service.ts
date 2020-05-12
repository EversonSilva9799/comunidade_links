import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //public url: string = 'http://localhost:3000';
  public url: string = 'https://comunidadelinks.herokuapp.com';

  constructor() { }


}
