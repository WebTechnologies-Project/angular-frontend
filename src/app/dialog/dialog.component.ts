import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../service/forms.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productForm!: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location,private api:FormsService,private formBuilder:FormBuilder
  ) { }
  
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({ "title": ['', String] , "description" : ['', String]})
    
  }

  addForm() {

    console.log(this.productForm.value);
    

    this.api
        .postProduct(this.productForm.value) 
        .subscribe({
          next: (res) => {
            this.productForm.reset();
          },
          error: () => {
            alert('Error while adding');
          },
        });

  } 

}
