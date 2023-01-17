import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Form } from '../models/form';
import { FormsService } from '../service/forms.service';


@Component({
  selector: 'app-tal',
  templateUrl: './tal.component.html',
  styleUrls: ['./tal.component.scss']
})
export class TalComponent implements OnInit {

  forms: Form[] = [];
  

  constructor(
    private formService: FormsService
  ) { }

  showAllForms() {
    this.formService.getForms().subscribe(forms => {
      this.forms = forms;
    });
  }

  ngOnInit() {
    this.showAllForms();
  }

}
