import { Component, Input, OnInit } from '@angular/core';
import { Form } from '../models/form';
import { FormsService } from '../service/forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() form: Form;
  constructor() { }

  ngOnInit() {
  }

  

}
