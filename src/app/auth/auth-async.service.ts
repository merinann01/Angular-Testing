import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthAsyncService {

    isAuthenticated(): Promise<boolean> {
        return Promise.resolve(!!localStorage.getItem('token'));
    }

}
