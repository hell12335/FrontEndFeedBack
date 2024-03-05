import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/services/autenticacao.service';

@Component({
  selector: 'app-forumalrio-cadastro',
  templateUrl: './forumalrio-cadastro.component.html',
  styleUrls: ['./forumalrio-cadastro.component.css']
})
export class ForumalrioCadastroComponent implements OnInit{
  public CadastroForm : FormGroup = new FormGroup({});
  carregando = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly autenticacaoService: AutenticacaoService,) {

  }

    ngOnInit() {
      this.validarformularioCadastro();
    }

    public submeterFormularioCadastro() : void{
      if (this.CadastroForm.valid) {
        this.carregando = true;
  
        this.autenticacaoService.autenticarCadastro(this.CadastroForm.value).subscribe({
          next: (response) => {
            this.CadastroForm.reset();
            this.carregando = false;
            this.autenticacaoService.armazenarToken(response.data.accessToken);
            this.router.navigate(['login']);
          },
          error: (error: any) => {
            this.CadastroForm.reset();
            this.carregando = false;
          },
        });
      }
    }

    private validarformularioCadastro(): void {
        this.CadastroForm = this.formBuilder.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
}