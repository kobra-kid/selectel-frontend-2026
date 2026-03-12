import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() menus: { id: number; name: string }[] = [];
  @Input() activeMenuId: number = 0;
  @Output() menuSelected = new EventEmitter<number>();

  select(id: number) {
    this.menuSelected.emit(id);
  }
}
