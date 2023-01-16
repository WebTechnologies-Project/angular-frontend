import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { TalComponent } from './tal/tal.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path: 'form/:id/',
    component: FormComponent,
  },
  {
    path: 'platform',
    component:TalComponent},
  {
    path: '',
    redirectTo: '/platform',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: "/platform"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
