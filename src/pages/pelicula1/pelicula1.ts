import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeptimoPage} from '../septimo/septimo';
/**
 * Generated class for the Pelicula1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pelicula1',
  templateUrl: 'pelicula1.html',
})
export class Pelicula1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pelicula1Page');
  }


  septimo(){
    this.navCtrl.push(SeptimoPage);
  }
}
