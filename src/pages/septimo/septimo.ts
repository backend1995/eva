import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VideoPage} from '../video/video';
/**
 * Generated class for the SeptimoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-septimo',
  templateUrl: 'septimo.html',
})
export class SeptimoPage {
  public ocultar1: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeptimoPage');
  }



  
accion1(){
this.ocultar1 = !this.ocultar1;
}

click(){
  this.navCtrl.push(VideoPage);
}
}