import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiServiceLogin } from './api.service';
import { LoginComponent } from './login/login.component';
import { ForumalrioCadastroComponent } from './forumalrio-cadastro/forumalrio-cadastro.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: "formularioCadastro", component: ForumalrioCadastroComponent},
  {path: "feedback", component: FeedbackComponent},
  {path: "login", component: LoginComponent},
  
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
