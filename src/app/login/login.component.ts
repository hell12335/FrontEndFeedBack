import { Component, OnInit } from '@angular/core';
import { ApiServiceLogin } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NavigationExtras } from '@angular/router';


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

  constructor(private apiService: ApiServiceLogin, private route: Route, private router: ActivatedRoute, private navigate: NavigationExtras) {}

  enviarDadosLogin() {
    this.apiService.enviarDadosLogin(this.user).subscribe(
      (response) => {
        this.route.navigate(['/login'])
      },
      
      (error) => {
        console.error('Erro ao enviar dados:', error);
      }
    );
  }
  enviarDadoscadastro() {
    this.apiService.enviarDadoscadastro(this.user).subscribe(
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