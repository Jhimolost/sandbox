import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ReactiveLoginComponent } from './components/reactive-login/reactive-login.component';
import { ListWithStorageComponent } from './components/list-with-storage/list-with-storage.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reactive-login',
    component: ReactiveLoginComponent
  },
  {
    path: 'typeahead',
    component: TypeaheadComponent
  }, {
    path: 'storage',
    component: ListWithStorageComponent
  }, {
    path: 'tabs',
    component: TabsContainerComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
