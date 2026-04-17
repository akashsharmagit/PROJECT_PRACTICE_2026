import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserId: number | null = null;   // ✅ BEST

  constructor(private http: HttpClient) { }

  onUserLogin(obj: any) {
    return this.http.post( Constant.API_BASE_URL + "login",obj);
  }
}