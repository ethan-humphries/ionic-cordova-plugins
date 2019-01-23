import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status'

@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html'
})
export class BatteryPage {
  batteryCharge: number;
  pluggedIn: boolean;
  batteryLow : boolean;
  errorMessage: boolean =  false;

  constructor(public navCtrl: NavController, private batteryStatus: BatteryStatus) {
      const subscription = this.batteryStatus.onChange().subscribe(status => {
      this.batteryCharge = status.level;
      this.pluggedIn = status.isPlugged;
      });
    
/*       this.batteryStatus.onLow().subscribe(event => {
      this.batteryLow =  true;
      });  */
    
  }


}
