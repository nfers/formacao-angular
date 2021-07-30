import { Component, Output, EventEmitter } from "@angular/core";
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() postTransfer = new EventEmitter<any>()

  valor: number;
  destino: number;

  transferir() {
    const newValue  = { valor: this.valor, destino: this.destino }
    this.postTransfer.emit(newValue);
    this.cleanFields();
  }

  cleanFields() {
    this.valor = 0;
    this.destino = 0;
  }
}
