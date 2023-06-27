import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, map } from 'rxjs';
import { environment } from '../Enviroment/enviroment';
import { Login } from '../Model/Account/Login.model';
import { User } from '../Model/Account/user.model';
import { Register } from '../Model/Account/register,model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSource = new ReplaySubject<User | null>(1);
  user$ = this.userSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(model: Login) {
    return this.http.post<User>(`${environment.apiUrl}account/login`, model)
      .pipe(
        map((user: User) => {
          if (user) {
            this.setUser(user);
          }
        })
      );
  }

  logout() {
    if (this.getJWT()!=null) {
      localStorage.removeItem(environment.userKey);
      this.userSource.next(null);
      this.router.navigateByUrl('/account/login');
    }
  }

  isLoggedIn(): boolean {
    const jwt = this.getJWT();
    return jwt !== null;
  }
  
  register(model: Register) {
    return this.http.post<any>(`${environment.apiUrl}account/register`, model);
  }

  getJWT() {
    const key = localStorage.getItem(environment.userKey);
    if (key) {
      const user: User = JSON.parse(key);
      return user.jwt;
    } else {
      return null;
    }
  }

  private setUser(user: User) {
    localStorage.setItem(environment.userKey, JSON.stringify(user));
    this.userSource.next(user);
  }

}
