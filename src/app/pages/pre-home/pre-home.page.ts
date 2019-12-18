import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pre-home',
  templateUrl: './pre-home.page.html',
  styleUrls: ['./pre-home.page.scss'],
})
export class PreHomePage implements OnInit {

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateForward('/home/tabs/tab1');
  }

}
