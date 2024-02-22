import { Component, OnInit } from '@angular/core';
import { ApiServiceLogin } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private apiService: ApiServiceLogin, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  enviarDadosLogin() {
    if (this.loginForm.valid) {
      this.apiService.enviarDadosLogin(this.loginForm.value).subscribe(
        (response) => {
          this.router.navigate(['/login']);
        },
        
        (error) => {
          console.error('Erro ao enviar dados:', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }

  enviarDadoscadastro() {
    if (this.loginForm.valid) {
      this.apiService.enviarDadoscadastro(this.loginForm.value).subscribe(
        (response) => {
          console.log('Dados enviados com sucesso:', response);
        },
        
        (error) => {
          console.error('Erro ao enviar dados:', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}