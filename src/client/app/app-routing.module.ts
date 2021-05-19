import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import { LoginComponent} from './components/login/login.component';
import { EditContactComponent} from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
 {
    path : 'contacts',
    component : ContactListComponent
  },
  {
    path : 'new',
    component : AddContactComponent
  },
  {
    path : 'edit',
    component : EditContactComponent
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
