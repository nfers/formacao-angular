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
  transferencia: any[] = [];

  transfer($event) {
    const transferencias = {...$event, data: new Date()};
    this.transferencia.push(transferencias);
  }
}
