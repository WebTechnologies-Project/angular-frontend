import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../models/field';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor(private http: HttpClient) { }
  getFieldsByFormId(formId: number): Observable<Field[]> {
    return this.http.get<Field[]>(`http://localhost:8080/fields/by-form/${formId}`);
  }
}
