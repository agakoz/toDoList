import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private paragraph;

  constructor(private ref: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    this.paragraph.innerHTML = (this.date.toLocaleDateString() + ', ' + this.date.toLocaleTimeString());
    this.renderer.appendChild(this.ref.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.ref.nativeElement, this.paragraph);
  }
}
