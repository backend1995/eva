import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Video1Page} from '../video1/video1';
/**
 * Generated class for the OdioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odio',
  templateUrl: 'odio.html',
})
export class OdioPage {
  public ocultar1: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OdioPage');
  }
  accion1(){
    this.ocultar1 = !this.ocultar1;
    }
  click(){
    this.navCtrl.push(Video1Page);
  }
}
