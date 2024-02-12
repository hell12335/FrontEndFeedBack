import { Component, OnInit } from '@angular/core';
import { ApiService } from 'C:/Users/caiqu/source/repos/serasa/FrontEndFeedBack/src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataFromApi: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (data) => {
        this.dataFromApi = data;
        console.log('Dados da API:', this.dataFromApi);
      },
      (error) => {
        console.error('Erro ao obter dados da API:', error);
      }
    );
  }
}