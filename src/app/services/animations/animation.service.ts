import { Injectable } from '@angular/core';
import {confetti} from "tsparticles-confetti";

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private readonly defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  playConfettiAnimation(particleCount: number, scalar: number): void {
    confetti({
      ...this.defaults,
      particleCount,
      scalar,
    });
  }
}
