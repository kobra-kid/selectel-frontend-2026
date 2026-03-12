import { Component, inject } from '@angular/core';
import { Header } from '../../header/header';
import { Sidebar } from '../../sidebar/sidebar';
import { Title } from '@angular/platform-browser';
import rawMenus from '../../data/items.json';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

interface MenuSection {
  id: number;
  name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  imports: [Header, Sidebar],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor() {
    inject(Title).setTitle('Menu');
  }

  menus: MenuSection[] = rawMenus.map((menu) => ({
    ...menu,
    items: menu.items.map((item) => ({ ...item, checked: false })),
  }));

  activeMenuId: number = this.menus[0].id;

  get activeMenu(): MenuSection {
    return this.menus.find((m) => m.id === this.activeMenuId)!;
  }

  get checkedCount(): number {
    return this.activeMenu.items.filter((i) => i.checked).length;
  }

  get totalValue(): number {
    return this.activeMenu.items.reduce((acc, i) => acc + (i.checked ? i.value : 0), 0);
  }

  selectMenu(id: number) {
    this.activeMenuId = id;
  }

  toggle(id: number) {
    const item = this.activeMenu.items.find((i) => i.id === id)!;
    if (item) item.checked = !item.checked;
  }
}
