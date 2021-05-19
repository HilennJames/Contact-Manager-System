import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import {Contact} from '../core/contact';
import {ContactResponse} from '../core/contact-response';



@Injectable()
export class ApiService {
  private baseUrl = environment.apiUrl;
  public datacopy = [];

  public headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  constructor(public http: HttpClient) { }

  public connect(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl + '/contacts', {headers: this.headers})
      .pipe(
        map( (response ) =>
        this.datacopy = response
      ));
  }

  public addContact(query: object): Observable<any>{
    console.log(query);
    return this.http.post(this.baseUrl + '/contact', query, {headers: this.headers}).pipe(
      map( response => response)
    );
  }
  public deleteContact(id: string): Observable<any>{
    return this.http.delete(this.baseUrl + '/contact/' + '/contact' + id);
  }

  public updateContact(id: string , payload: string): Observable<any>{
    return this.http.put(this.baseUrl + '/contact/' + id, payload, {headers: this.headers}).pipe(
      map( response => response)
    );
  }

  public transform(datacopy: Observable<any>): ContactResponse {
    return new ContactResponse(this.datacopy);
  }

  public post( payload: object ): Observable<any>{
    return this.http.post(this.baseUrl + '/authenticate' , payload , { headers: this.headers}).
    pipe(
      map(response => response)
    );
  }
}
