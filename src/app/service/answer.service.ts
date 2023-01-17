import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }
  
  createAnswer(answer: Answer) {
    console.log(answer);
    return this.http.post('http://localhost:8080/answers/-wrong-', answer);
  }

}
