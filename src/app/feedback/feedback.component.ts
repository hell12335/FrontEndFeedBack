import { Component } from '@angular/core';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/model/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { FeedbackResponse } from 'src/model/feedback.model';

export interface Feedback {
  username: string;
  data: Date;
  mensagem: string;
}


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  displayedColumns: string[] = ['nome', 'data', 'feedback', 'acoes'];
  dataSource: Feedback[] = [
    { username: 'Usuário 1', data: new Date(), mensagem: 'Feedback 1' },
    { username: 'Usuário 2', data: new Date(), mensagem: 'Feedback 2' },
    { username: 'Usuário 3', data: new Date(), mensagem: 'Feedback 3' },
  ];

  private urlBaseApiCadastroFeedback = `${environment.urlBaseApi}/api/v1/feedback/`;

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  public  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  refreshToken(token: string) {
    return this.http.post(this.urlBaseApiCadastroFeedback + 'refreshtoken', {
      refreshToken: token
    }, this.httpOptions);
  }

  adicionarFeedback() {
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      width: '400px',
      data: { username: '', mensagem: '' }
    });



    dialogRef.afterClosed().subscribe((result?: FeedbackResponse) => {
      if (result) {
        const novoFeedback: Feedback = {
          username: result.user.username,
          data: new Date(result.created_at),
          mensagem: result.comment
        };
        this.dataSource = [...this.dataSource, novoFeedback]
      }
    });
  }
  removerFeedback(feedback: Feedback) {
    const index = this.dataSource.indexOf(feedback);
    if (index >= 0) {
      this.dataSource = [...this.dataSource.slice(0, index), ...this.dataSource.slice(index + 1)];
    }
  }

  voltarHome() {
    this.adicionarFeedback();
  }

  realizarLogout() {
    console.log('Usuário realizou logout');
  }
}
