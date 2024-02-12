import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ForumalrioCadastroComponent } from './forumalrio-cadastro/forumalrio-cadastro.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForumalrioCadastroComponent,
    FeedbackComponent,
    FeedbackFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatButtonModule,
    MatInputModule, 
    MatMenuModule, 
    MatIconModule, 
    MatTableModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 
