import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { NgForm } from '@angular/forms';
import { Contact } from '../../core/contact';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  loading: Boolean = false;
  newContact: Contact | Observable<Contact> | undefined;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    this.loading = true;
    const formValues = Object.assign({}, form.value);
    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address : formValues.address,
      phone: `${formValues.areaCode}${formValues.prefix}-${formValues.lineNumber}`,
      photoUrl: `${formValues.photoUrl}`
    };
    this.apiService.addContact(contact)
      .subscribe((result) => console.log(result));
  }
}
