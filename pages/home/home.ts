import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, private tts: TextToSpeech) {

  }

  stopPlayback(){
    this.tts.speak('');
    this.tts.stop();
  }

  beginPlayback(input : string, speed : number){
    this.tts.speak({
      text: input,
      rate: speed 
    });
  }


}
