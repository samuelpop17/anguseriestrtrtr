import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  playAudio() {
    if (isPlatformBrowser(this.platformId)) {
      const audio = new Audio();
      audio.src = '/assets/audio/audio.mp3'; // Ruta al archivo de audio
      audio.load();
      audio.play();
    }
  }
  
}
