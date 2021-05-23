import {Component, Input, OnInit } from '@angular/core';
import {ContactResponse} from '../../core/contact-response';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact!: ContactResponse;
  constructor(private apiService: ApiService , private router: Router) {}

  ngOnInit(): void {
  }
  delete(id: any): any {
    id = this.contact._id;
    this.apiService.deleteContact(id).subscribe();
    console.log('btn clicked');
  }
}
