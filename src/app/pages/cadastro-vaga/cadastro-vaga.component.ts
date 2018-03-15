import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.scss']
})
export class CadastroVagaComponent implements OnInit {

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
  }

  formSubmit(f) {
    if (!f.valid) {
      return;
    }
    this.angularFire.list('vagas').push(
      {
        descricao: f.controls.descricao.value
      }
    ).then((t: any) => {
      console.log('dados gravados: ' + t.key);
    }, ((e: any) => {
      console.log('error');
    }));
  }

}
