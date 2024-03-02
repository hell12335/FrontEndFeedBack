import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiServiceLogin } from './api.service';
import { LoginComponent } from './login/login.component';
import { ForumalrioCadastroComponent } from './forumalrio-cadastro/forumalrio-cadastro.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feedback',
    pathMatch: 'full'
  },
  {
    path: "formularioCadastro",
    component: ForumalrioCadastroComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "**",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
