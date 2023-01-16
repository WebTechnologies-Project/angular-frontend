import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { TalComponent } from './tal/tal.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [		
    AppComponent,
    DialogComponent,
      FormComponent,
      TalComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
