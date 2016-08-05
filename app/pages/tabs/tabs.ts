import {Component} from '@angular/core';
import {TasksPage} from '../tasks-page/tasks-page';
import {RollsPage} from '../rolls-page/rolls-page';
import {SettingsPage} from '../settings-page/settings-page';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = TasksPage;
    this.tab2Root = RollsPage;
    this.tab3Root = SettingsPage;
  }

  onPageLoaded() {
  }
}
