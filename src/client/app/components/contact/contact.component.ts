import {Component, Input, OnInit, HostBinding, Output , EventEmitter } from '@angular/core';
import {ContactResponse} from '../../core/update-contact';
import {ApiService} from '../../shared/api.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact!: ContactResponse;
  constructor( private apiService: ApiService ) {}

  ngOnInit(): void {
  }
  delete(id: any): any {
    console.log(this.contact);
    console.log(this.apiService.datacopy[id]);
    console.log(this.apiService.datacopy);
    console.log(this.apiService.datacopy[id]._id);
   // this.apiService.deleteContact();
  }
}
