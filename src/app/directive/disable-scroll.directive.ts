import { Directive, ElementRef, Renderer2, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDisableScroll]'
})
export class DisableScrollDirective implements OnDestroy {
  @Input() set disableScroll(value: boolean) {
    if (value) {
      this.disableScrolling();
    } else {
      this.enableScrolling();
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnDestroy() {
    this.enableScrolling();
  }

  private disableScrolling() {
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  private enableScrolling() {
    this.renderer.removeStyle(this.el.nativeElement, 'overflow');
  }
}
