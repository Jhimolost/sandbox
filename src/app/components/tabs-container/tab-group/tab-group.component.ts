import { TabComponent } from '../tab/tab.component';
import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-group',
  standalone: false,
  template: `
    <ng-content></ng-content>

    <ng-container *ngFor="let tab of tabs">
      <div *ngIf="tab.isActive" class="view">
      {{tab.content}}
      </div>
    </ng-container>
  `
})
export class TabGroupComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  private tabClickSubscriptions: Subscription[] = [];
  private currentActiveTab: TabComponent | null = null;

  ngAfterViewInit(): void {
    this.tabClickSubscriptions.forEach(sub => sub.unsubscribe());
    this.tabClickSubscriptions = [];

    this.tabs.forEach(tab => {
      const sub = tab.onClick.subscribe(() => {
        this.activateTab(tab);
      });
      this.tabClickSubscriptions.push(sub);
    });
  }

  private activateTab(tabToActivate: TabComponent): void {
    if (this.currentActiveTab && this.currentActiveTab !== tabToActivate) {
      this.currentActiveTab.isActive = false;
    }

    tabToActivate.isActive = true;
    this.currentActiveTab = tabToActivate;
  }

  ngOnDestroy(): void {
    this.tabClickSubscriptions.forEach(sub => sub.unsubscribe());
  }
}

