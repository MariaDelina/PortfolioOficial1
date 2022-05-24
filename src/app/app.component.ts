import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioOficial';
  @ViewChild('cursor') cursorRef!: ElementRef;

  constructor(private renderer2: Renderer2) { }

  mouseMoveHandler(e: MouseEvent) {
    setTimeout( //agrego delay, no es necesario
      () =>
      this.renderer2.setAttribute(this.cursorRef.nativeElement, 'style', `left:${e.clientX - 40}px; top:${e.clientY - 40}px;`)
    , 75);
  }
}
