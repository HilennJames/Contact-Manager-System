import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ApiService } from './shared/api.service';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
import { LoginComponent } from './components/login/login.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    MenuComponent,
    AddContactComponent,
    LoginComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
