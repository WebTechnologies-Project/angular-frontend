import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../models/answer';
import { Field } from '../models/field';
import { AnswerService } from '../service/answer.service';
import { FieldsService } from '../service/fields.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  
  options = ['Option 1', 'Option 2', 'Option 3'];
  range = {min: 1, max: 10};
  @Input() fields: Field[];
  @Input() formId: number;
  answers: Answer[] = [];
  

  constructor(private fieldService: FieldsService, private route: ActivatedRoute, private answerService: AnswerService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fieldService.getFieldsByFormId(this.formId).subscribe(fields => {
        this.fields = fields;
      });
    });
  }


   
  onSubmit(event) {
    event.preventDefault();
    let answers = [];
    const inputs = event.target.querySelectorAll("input");
    inputs.forEach((input) => {
      answers.push({fieldId: input.id, content: input.value});
    });
    for (let i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
      this.answerService.createAnswer(this.answers[i]).subscribe();
    }
     this.answers = [];
  }



}


