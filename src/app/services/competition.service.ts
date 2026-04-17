import { Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';
import { CompetitionModal } from '../modal/competition.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  // ✅ GET (no parameter needed)
  getCompetition(): Observable<CompetitionModal[]> {
    return this.http.get<CompetitionModal[]>(
      Constant.API_BASE_URL + "/GetAllCompetition"
    );
  }

  // ✅ POST
 createCompetition(obj: CompetitionModal): Observable<any> {
  return this.http.post(
    Constant.API_BASE_URL + '/Competition',
    obj
  );
}
}