import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
@Injectable()
export class AuthService {
 storageKey = 'contact-manager-jwt';

 constructor(private router: Router) { }

  public setToken(token: string): void{
    localStorage.setItem(this.storageKey, token);
  }
  public getToken(): string{
    return localStorage.getItem(this.storageKey);
  }
 public isLoggedIn(): boolean {
    return this.getToken() !== null;
 }
 public logout(): void{
   localStorage.removeItem(this.storageKey);
   this.router.navigate(['/login']);
 }

}
