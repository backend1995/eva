import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pelicula1Page} from '../pelicula1/pelicula1';
import {Pelicula2Page} from '../pelicula2/pelicula2';
import {Pelicula3Page} from '../pelicula3/pelicula3';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


ir(){
  this.navCtrl.push(Pelicula1Page);
}
ir1(){
  this.navCtrl.push(Pelicula2Page);
}
ir2(){
  this.navCtrl.push(Pelicula3Page);
}
}
