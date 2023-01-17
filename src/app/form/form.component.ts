import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../models/answer';
import { Form } from '../models/form';
import { FormsService } from '../service/forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form: Form;
  formId: number;
  answers: Answer[] = [];
  
  constructor(private formsService: FormsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.formId = params['id'];
      this.formsService.getForm(id).subscribe(form => {
        this.form = form;
      });
    });
  }
  goBack() {
    this.router.navigate(['/platform']);
  }
  

  

}
