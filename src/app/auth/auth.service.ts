import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    //returns true if there is a token stored in the browsers localStorage
    return !!localStorage.getItem('token');
  }
}
