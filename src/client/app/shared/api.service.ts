import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import {Contact} from '../core/contact';
import {ContactResponse} from '../core/update-contact';



@Injectable()
export class ApiService {
  private baseUrl = environment.apiUrl;
  public datacopy = [];

  constructor(public http: HttpClient) { }
  public connect(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl + '/contacts', )
      .pipe(
        map( (response ) =>
        this.datacopy = [...response ]
      ));
    // tslint:disable-next-line:no-unused-expression
    new ContactResponse(this.datacopy);
  }
  public addContact(query: object): Observable<any>{
    console.log(query);
    const headers =  new HttpHeaders({
  'Access-Contro-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-Width, Content-Type, Accept',
  'Content-Type': 'application/json'
});
    return this.http.post(this.baseUrl + '/contact', query).pipe(
      map( response => response)
    );
  }
  public deleteContact(id: string): Observable<any>{
    return this.http.delete(this.baseUrl + '/contact/' + id);
  }

  public transform(datacopy: Observable<any>): ContactResponse {
    return new ContactResponse(this.datacopy);
  }
}
