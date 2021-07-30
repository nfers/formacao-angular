import { Component } from '@angular/core';
import {TransferenciaService} from '../app/services/transferencia.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteBank';

  constructor(private service: TransferenciaService) {}
  transfer($event) {
    this.service.adicionaTransferencia($event);
  }
}
