import { Component } from '@angular/core';
import { Observable, from, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string | null = null;
  isLoading: boolean = false;
  private loginErrorSubject = new Subject<string>();

  constructor(private authService: AuthService,private router: Router) { }

  login() {
    this.isLoading = true;
    from(this.authService.login(this.username, this.password))
      .pipe(
        catchError((error) => {
          this.loginErrorSubject.next(error);
          return [];
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: () => {
          // Redirect to the desired page upon successful login
          // For example, you can navigate to the home page
          this.router.navigate(['/homemain']);
        }
      });
  }

  getLoginError(): Observable<string> {
    return this.loginErrorSubject.asObservable();
  }
}
