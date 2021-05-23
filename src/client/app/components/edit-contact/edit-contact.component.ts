import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import {ApiService} from '../../shared/api.service';
import { Router , ActivatedRoute  , QueryParamsHandling , Params, ParamMap} from '@angular/router';
import { ContactResponse } from '../../core/contact-response';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: ContactResponse = null;
  editForm: FormGroup;
  test: any;
  constructor(
    public formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    // @ts-ignore
    this.editForm = this.formBuilder.group({
      name: '',
      address: '',
      phone: '',
      photoUrl: '',
      image : []
    });
  }

  ngOnInit(): void {
    this.api.getContact(this.activatedRoute.snapshot.queryParams._id)
      .subscribe( data => this.contact = new ContactResponse(data) );
  }
  onSubmit(): any{
   console.log(this.contact);
   console.log(this.contact._id[0].name);

}}

