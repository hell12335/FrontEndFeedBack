import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumalrioCadastroComponent } from './forumalrio-cadastro.component';

describe('ForumalrioCadastroComponent', () => {
  let component: ForumalrioCadastroComponent;
  let fixture: ComponentFixture<ForumalrioCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumalrioCadastroComponent]
    });
    fixture = TestBed.createComponent(ForumalrioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
