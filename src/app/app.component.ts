import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteBank';

  destino: number;
  valor: number;
  transferencia: any;

  transfer($event) {

    this.transferencia = $event;
  }
}
