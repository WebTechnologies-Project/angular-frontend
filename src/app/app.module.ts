import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TalComponent } from './tal/tal.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsService } from './service/forms.service';



@NgModule({
  declarations: [		
    AppComponent,
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
