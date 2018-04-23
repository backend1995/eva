import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OdioPage} from '../odio/odio';
/**
 * Generated class for the Pelicula2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pelicula2',
  templateUrl: 'pelicula2.html',
})
export class Pelicula2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pelicula2Page');
  }
  

  odio(){
    this.navCtrl.push(OdioPage);
  }
}
