import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, NgForm , FormGroup } from '@angular/forms';
import { Contact } from '../../core/contact-response';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  loading = false;
  newContact: Contact | Observable<Contact> | undefined;
  // selectedFile: File = null;
  Addcontactform: FormGroup;

  constructor( private apiService: ApiService, public formBuilder: FormBuilder) {
    this.Addcontactform = this.formBuilder.group({
      firstName: '',
      lastName: '',
      address: '',
      areaCode: '',
      prefix: '',
      lineNumber: '',
      photoUrl: [''],
      image : []
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  uploadFile(event){
    const file = event.target.files[0];
    console.log(file);
    this.Addcontactform.patchValue({
      image: file
    }) ;
    this.Addcontactform.get('image').updateValueAndValidity();
   }

  onSubmit(): void{
    this.loading = true;
    const formValues = Object.assign({}, this.Addcontactform.value);
    const photoObject = {
      photoUrl: this.Addcontactform.get('photoUrl').value,
      image: this.Addcontactform.get('image').value
    };
    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address : formValues.address,
      phone: `${formValues.areaCode}${formValues.prefix}-${formValues.lineNumber}`,
      photoUrl: [photoObject]
    };
    console.log(contact);
    this.apiService.addContact(contact)
    .subscribe((result) => console.log(result));
  }

}
