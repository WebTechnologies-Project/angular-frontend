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
    private router: Router,
    private route: ActivatedRoute,
    private api: FormsService
  ) { }

  getAllforms() {
    this.api
      .getProduct()
      .pipe(
        tap((forms: Form[]) => {
          this.forms = forms;
        })
      )
      .subscribe();
    console.log(this.forms);
  }

  ngOnInit() {
    this.getAllforms();
  }

}
