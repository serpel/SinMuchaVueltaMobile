import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { 
  }
  
  //constructor(public navCtrl: NavController, private iab: InAppBrowser) {   
  //}
  

  //ngOnInit(){
  //      const browser = this.iab.create('https://www.sinmuchavuelta.com','_system',{location:'no'}); 
  //  }

    
}
