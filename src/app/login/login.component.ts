import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm : FormGroup = new FormGroup({});
public carregando = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly autenticacaoService: AutenticacaoService,) {

  }

  ngOnInit() {
    this.validarformulario();
  }

  public submeterFormulario() : void{
    if (this.loginForm.valid) {
      this.carregando = true;

      this.autenticacaoService.autenticar(this.loginForm.value).subscribe({
        next: (response) => {
          this.loginForm.reset();
          this.carregando = false;
          this.autenticacaoService.armazenarToken(response.data.accessToken);
          this.router.navigate(['feedback']);
        },
        error: (error: any) => {
          this.loginForm.reset();
          this.carregando = false;
        },
      });
    }
  }

  private validarformulario(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
