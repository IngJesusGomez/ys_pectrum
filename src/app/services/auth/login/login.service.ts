import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://10.0.1.65:8080/GomartApi/api/'

  constructor() { }
}
