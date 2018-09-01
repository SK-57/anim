import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details';
import binarySortData from '../../staticdata/binarySortData';
import mergeSortData from '../../staticdata/mergeSortData';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log('staticData ', binarySortData);
  }

  onBinarySort() {
    this.navCtrl.push(DetailsPage, { data: binarySortData });
    console.log("binarySortClick");
}


onMergeSort() {
  console.log("mergeSortClick");
  this.navCtrl.push(DetailsPage, { data: mergeSortData });
}

onBubbleSort() {
  console.log("bubbleSortClick");
}

}
