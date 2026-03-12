import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() value: number = 0;
}
