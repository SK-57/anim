import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage  implements OnInit{

  passedObj: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    console.log("data ", this.passedObj)
    this.passedObj = this.navParams.get('data');
  }

}
