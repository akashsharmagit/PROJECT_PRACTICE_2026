import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserId: number | null = null;   // ✅ BEST

  constructor(private http: HttpClient) { }

  onUserLogin(obj: any) {
    return this.http.post(
      "https://api.freeprojectapi.com/api/ProjectCompetition/login",
      obj
    );
  }
}