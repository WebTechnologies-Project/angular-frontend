import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../models/form';
import { FormsService } from '../service/forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form: Form;
  constructor(private formsService: FormsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.formsService.getForm(id).subscribe(form => {
        this.form = form;
      });
    });
  }

  

}
