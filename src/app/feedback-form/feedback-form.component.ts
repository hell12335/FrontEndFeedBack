import { Component, OnInit } from '@angular/core';
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
export class FeedbackFormComponent implements OnInit {
  public feedbackForm : FormGroup = new FormGroup({});
  public carregando = false;

  constructor(
    public dialogRef: MatDialogRef<FeedbackFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly autenticacaoService: AutenticacaoService,
  ) {}

  ngOnInit() {
    this.validarCadastroFeedback();
  }


  public submeterCadastroFeedBack() : void{
    if (this.feedbackForm.valid) {
      this.carregando = true;
      this.autenticacaoService.autenticarCadastroFeedback(this.feedbackForm.value).subscribe({
        next: (response) => {
          this.feedbackForm.reset();
          this.carregando = false;
          this.dialogRef.close(response.data)
        },
        error: (error: any) => {
          this.feedbackForm.reset();
          this.carregando = false;
        },
      });
    }
  }

  private validarCadastroFeedback(): void {
    this.feedbackForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }
}
