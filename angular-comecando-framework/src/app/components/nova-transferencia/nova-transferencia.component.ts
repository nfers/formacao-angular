import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() postTransfer = new EventEmitter<any>()

  constructor(private service: TransferenciaService, private router: Router) {

   }

  valor: number;
  destino: number;

  transferir() {
    const newValue : Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicionaTransferencia(newValue)
      .subscribe( res => {
        this.cleanFields();
        this.router.navigate(['extrato']);
    },
      (error => console.error(error))
    );
  }

  cleanFields() {
    this.valor = 0;
    this.destino = 0;
  }
}
