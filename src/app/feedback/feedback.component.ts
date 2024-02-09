import { Component } from '@angular/core';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { MatDialog } from '@angular/material/dialog';

export interface Feedback {
  nome: string;
  data?: Date;
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
    { nome: 'Usuário 1', data: new Date(), mensagem: 'Feedback 1' },
    { nome: 'Usuário 2', data: new Date(), mensagem: 'Feedback 2' },
    { nome: 'Usuário 3', data: new Date(), mensagem: 'Feedback 3' },
  ];

  constructor(public dialog: MatDialog) {}

  adicionarFeedback() {
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      width: '400px',
      data: { nome: '', mensagem: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const novoFeedback: Feedback = {
          nome: result.nome,
          data: new Date(),
          mensagem: result.mensagem
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
    // Utiliza o Router para navegar para a página home
    this.adicionarFeedback();
  }

  realizarLogout() {
    // Lógica para realizar o logout (pode redirecionar para a página de login, por exemplo)
    console.log('Usuário realizou logout');
  }
}
