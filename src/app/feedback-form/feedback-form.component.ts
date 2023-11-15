import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  constructor(
    public dialogRef: MatDialogRef<FeedbackFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nome: string, mensagem: string }
  ) {}

  onSubmit(): void {
    this.dialogRef.close(this.data);
  }
}
