import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiModel } from '@models/api-model';
import { User } from '@models/user/user.model';
import { Experience } from '@models/user/experience.model';

import { HttpService } from '@services/http.service';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = '/user';

  constructor(private httpService: HttpService) {}

  login(data: object): Observable<HttpResponse<ApiModel<object>>> {
    // @ts-ignore
    return this.httpService.post<object>('/login', data);
  }

  getUser(): Observable<ApiModel<User>> {
    return this.httpService.get<User>(this.baseUrl);
  }

  addUser(data: object): Observable<ApiModel<string>> {
    return this.httpService.post<string>(this.baseUrl, data);
  }

  updateUser(data: object): Observable<ApiModel<string>> {
    return this.httpService.patch<string>(this.baseUrl, data);
  }

  getUserExperiences(): Observable<ApiModel<Experience[]>> {
    return this.httpService.get<Experience[]>(`${this.baseUrl}/experience`);
  }
}