import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field } from '../models/field';
import { FieldsService } from '../service/fields.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() fields: Field[];
  @Input() formId: number;
  
  constructor(private fieldService: FieldsService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const formId = params['formID'];
      this.fieldService.getFieldsByFormId(formId).subscribe(fields => {
        this.fields = fields;
      });
    });
  }

}
