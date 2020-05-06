import { Component, ViewChild, HostListener, ChangeDetectorRef, ElementRef } from '@angular/core';
import { StHeaderMenuOption, StLauncherGroup } from '@stratio/egeo';
import { LAUNCHER_ITEMS, HEADER_MENU } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'egeo-poc';

  public height: string;
  public launcherTitle: string = 'Services';
  public headerMenuSchema: StHeaderMenuOption[] = HEADER_MENU;
  public launcherItems: StLauncherGroup[] = LAUNCHER_ITEMS;
  public showLauncherMenu: boolean = false;
  public showModal = false;

  public rotate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  @ViewChild('launcher', { static: false }) launcherElement: ElementRef;

  constructor(private _cd: ChangeDetectorRef) { }

  onMenuClick(): void {
    this.showLauncherMenu = !this.showLauncherMenu;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const expandNewValue: boolean = this.showLauncherMenu && this.launcherElement &&
      this.launcherElement.nativeElement.contains(event.target);

    if (expandNewValue !== this.showLauncherMenu) {
      this.showLauncherMenu = expandNewValue;
    }
  }
}
