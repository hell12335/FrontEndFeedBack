import { Component } from '@angular/core';
import { ApiServiceLogin } from '../api.service';

@Component({
  selector: 'app-forumalrio-cadastro',
  templateUrl: './forumalrio-cadastro.component.html',
  styleUrls: ['./forumalrio-cadastro.component.css']
})
export class ForumalrioCadastroComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiServiceLogin) {}

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