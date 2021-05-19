import {Component, Input, OnInit, HostBinding, Output , EventEmitter } from '@angular/core';
import {ContactResponse} from '../../core/contact-response';
import {ApiService} from '../../shared/api.service';
import { Router } from '@angular/router';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact!: ContactResponse;
  constructor( private apiService: ApiService , public router: Router ,  ) {}

  ngOnInit(): void {
  }
  delete(id: any): any {
    console.log('btn clicked');
    id = this.contact._id;
    this.apiService.deleteContact(id);
  }
}
