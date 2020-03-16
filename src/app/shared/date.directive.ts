import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;

  constructor() {
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    console.log('mouse enter');
    console.log(this.date);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    console.log('mouse leave');
  }
}
