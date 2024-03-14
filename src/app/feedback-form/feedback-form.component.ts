import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Feedback } from '../feedback/feedback.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/services/autenticacao.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  public loginForm : FormGroup = new FormGroup({});
  public carregando = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly autenticacaoService: AutenticacaoService,
  ) {}

  onSubmit() {
    this.validarCadastroFeedback();
  }


  public submeterCadastroFeedBack() : void{
    if (this.loginForm.valid) {
      this.carregando = true;
  
      this.autenticacaoService.autenticarCadastroFeedback(this.loginForm.value).subscribe({
        next: (response) => {
          this.loginForm.reset();
          this.carregando = false;
          this.autenticacaoService.obterIdArmazenadoNoToken();
          this.autenticacaoService.usuarioEstaAutenticado();
          this.router.navigate(['feedback']);
        },
        error: (error: any) => {
          this.loginForm.reset();
          this.carregando = false;
        },
      });
    }
  }
  
  private validarCadastroFeedback(): void {
    this.loginForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }
}
