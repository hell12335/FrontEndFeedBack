import { Component, OnInit } from '@angular/core';
import { ApiServiceLogin } from 'C:/Users/caiqu/source/repos/serasa front/FrontEndFeedBack/src/app/api.service.login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiServiceLogin) {}

  enviarDados() {
    this.apiService.enviarDados(this.user).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso:', response);
        // Lógica adicional após o envio bem-sucedido, se necessário
      },
      (error) => {
        console.error('Erro ao enviar dados:', error);
      }
    );
  }
}