import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }
  
  postForms(data: Form) {
    return this.http.post<Form>('http://localhost:8080/forms/', data);
  }
  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>('http://localhost:8080/forms');
  }
  getForm(id: number): Observable<Form> {
    return this.http.get<Form>(`http://localhost:8080/forms/${id}`);
  }

  
}
