import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {
  model : string;
  platform: string;
  osversion : string;
  manufacturer : string;

  constructor(public navCtrl: NavController, private device: Device) {
    this.model = this.device.model;
    this.platform =  this.device.platform;
    this.osversion = this.device.version;
    this.manufacturer =  this.device.manufacturer;
  }

}
