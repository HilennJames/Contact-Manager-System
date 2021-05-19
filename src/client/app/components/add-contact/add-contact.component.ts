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
  loading = false;
  newContact: Contact | Observable<Contact> | undefined;
  selectedFile: File = null;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  uploadFile(event){
    this.selectedFile = event.target.files[0];
   }

  onSubmit(form: NgForm): void{
    this.loading = true;
    const formValues = Object.assign({}, form.value);

    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address : formValues.address,
      phone: `${formValues.areaCode}${formValues.prefix}-${formValues.lineNumber}`,
      photoUrl: this.selectedFile.name
    };
    console.log(contact);
    console.log(this.selectedFile);
    this.apiService.addContact(contact)
      .subscribe((result) => console.log(result));
  }

}
