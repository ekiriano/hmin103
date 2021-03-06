import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/AuthData';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private tokenTimer: any;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }


  login(email: string, password: string) {
    this.http.post<{token: string, expiresIn: number, admin: boolean}>("http://localhost:4200/api/users/login", { email: email, password: password })
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if(token)
        {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date (now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(token, expirationDate);
        if(response.admin) { this.router.navigate(['/admin']); }
        else { this.router.navigate(['/']); }
        this.toastr.success(':)', 'Login Successfull!', {
          positionClass: 'toast-bottom-right'
        });
        }
      })
  }

  register(email:string, password:string, name:string, password_confirm:string) {
    const authData: AuthData = {email: email, password: password, name: name, password_confirm: password_confirm};
    this.http.post("http://localhost:4200/api/users/register", authData)
      .subscribe(response => {
        this.router.navigate(['/']);
        this.toastr.success(':)', 'Register Successfull', {
          positionClass: 'toast-bottom-right'
        });
      });
 }

 autoAuthUser()
 {
   const authInfos = this.getAuthData();
   if(!authInfos) { return; }
   const now = new Date();
   const expiresIn = authInfos.expirationDate.getTime() - now.getTime();

   if(expiresIn > 0)
   {
     this.token = authInfos.token;
     this.isAuthenticated = true;
     this.setAuthTimer(expiresIn / 1000);
     this.authStatusListener.next(true);
   }
 }

 logout()
 {
   this.token = null;
   this.isAuthenticated = false;
   this.authStatusListener.next(false);
   clearTimeout(this.tokenTimer);
   this.clearAuthData();
   this.router.navigate(['/']);
   this.toastr.success(':)', 'Logout Successfull', {
     positionClass: 'toast-bottom-right'
   });
 }

 private saveAuthData(token: string, expirationDate: Date)
 {
   localStorage.setItem('token', token);
   localStorage.setItem('expiration', expirationDate.toISOString());
 }

 private clearAuthData()
 {
   localStorage.removeItem('token');
   localStorage.removeItem('expiration');
 }

 private setAuthTimer(duration: number)
 {
   this.tokenTimer = setTimeout(() => {
     this.logout();
   }, duration * 1000);
 }

 private getAuthData()
 {
   const token = localStorage.getItem('token');
   const expirationDate = localStorage.getItem('expirationDate');

   if(!token || !expirationDate)
   {
     return;
   }

   return {
     token: token,
     expirationDate: new Date(expirationDate)
   }
 }

 getToken() {
   return this.token;
 }

 getIsAuth()
 {
   return this.isAuthenticated;
 }

 getAuthStatusListener()
 {
   return this.authStatusListener.asObservable();
 }

}
