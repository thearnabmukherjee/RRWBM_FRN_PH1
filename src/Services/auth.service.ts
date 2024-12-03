import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subLoginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  validCredentials: { username: string, password: string }[] = [
    { username: 'root', password: 'root' },
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
  ];

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Promise<void> {
    // Check if the provided credentials match any valid credentials
    const validCredential = this.validCredentials.find(cred => cred.username === username && cred.password === password);
    if (validCredential) {
      // Simulate a successful login
      this.subLoginState.next(true);
      return Promise.resolve();
    } else {
      // Simulate an unsuccessful login
      this.subLoginState.next(false);
      return Promise.reject('Invalid username or password');
    }
  }

  logout(): Promise<void> {
    // Simulate a logout by resetting the login state
    this.subLoginState.next(false);
    return Promise.resolve();
  }

  isLoggedIn(): boolean {
    return this.subLoginState.value;
  }

  getLoginStateObservable() {
    return this.subLoginState.asObservable();
  }
}
