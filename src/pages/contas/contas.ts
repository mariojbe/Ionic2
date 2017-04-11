import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DAOContas } from '../../dao/dao-contas';


@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html'
})
export class ContasPage {

  private dao = DAOContas;
  listContas:any;

  constructor(public navCtrl: NavController) {

      this.dao = new DAOContas();
      this.listContas = this.dao.getList();
  }

}
