import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component : AppComponent
  },
  {
    path : 'contacts',
    component : ContactListComponent
  },
  {
    path : 'new',
    component : AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
