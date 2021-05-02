import {
  Component,
  OnInit,
} from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ContactResponse} from '../../core/update-contact';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: ContactResponse[] | any ;
  constructor( private apiService: ApiService) {
    this.contacts = [];
  }

  ngOnInit(): void {
    this.listContacts();
    console.log(this.contacts);
  }

  listContacts(): any {
    return this.apiService.connect()
      .pipe(
        map(data => data.map(id => id) )
      ).subscribe((res) => {
        this.contacts = res;
      } );
  }
  // the  event will be th the child component

}
