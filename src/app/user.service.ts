import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EqEntity } from './eq-entity.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://cypis-ll.pl/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<EqEntity[]> {
    return this.http.get<EqEntity[]>(`${this.apiUrl}?page=${page}`);
  }
}
