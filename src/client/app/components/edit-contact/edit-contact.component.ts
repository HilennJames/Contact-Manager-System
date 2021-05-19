import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../shared/api.service';
import { Router , ActivatedRoute  , ParamMap} from '@angular/router';
import { ContactResponse } from '../../core/contact-response';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact: ContactResponse = null;

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      console.log(this.contact);
    });
  }
  onSubmit(form: NgForm): any{
  }
}
