import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private listaTransferencia: any[];


  constructor() {
    this.listaTransferencia = [];
   }

   get transferencias() {
     return this.listaTransferencia;
   }



  adicionaTransferencia(transferencia: any) {

    this.preencher(transferencia);
    //const transferencias = {...$event, data: new Date()};
    this.listaTransferencia.push(transferencia);
  }


private preencher(transferencia: any){
  transferencia.data = new Date();
}

}
