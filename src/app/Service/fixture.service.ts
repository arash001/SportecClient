import { Injectable } from '@angular/core';
import { environment } from '../Enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { PutDataRequest } from '../Model/PutDataRequest.model';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${environment.apiUrl}Fixtures/GetPutDataRequest`);
}

save(putDataRequest :PutDataRequest[]) {
  return this.http.post<any>(`${environment.apiUrl}Fixtures`,putDataRequest);
}

}
