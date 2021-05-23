import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Contact} from '../core/contact-response';
import {ContactResponse} from '../core/contact-response';



@Injectable()
export class ApiService {
  private baseUrl = environment.apiUrl;
  public datacopy = [];

  public headers = new HttpHeaders()
  .set('Enctype', 'multipart/form-data' )
  .set('Access-Control-Allow-Origin', '*');
  constructor(public http: HttpClient) { }

  public connect(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl + '/contacts', {headers: this.headers})
      .pipe(
        map( (response ) =>
        this.datacopy = response
      ));
  }

  public getContact(id: any): Observable<Contact[]>{
    const url = `${this.baseUrl}/contact/${id}`;
    return this.http.get<Contact[]>(url, {headers: this.headers})
      .pipe(
        map( (response ) =>
          this.datacopy = response
        ));
  }

  public addContact(query: object): Observable<any>{
    console.log(query);
    return this.http.post(
      this.baseUrl + '/contact',
      query,
      {headers: this.headers}
      ).pipe(
      map( response => response)
    );
  }
  public deleteContact(id: string): Observable<any>{
  console.log('inside service');
  return this.http.delete(
      this.baseUrl + '/contact/'  + id,
      {headers: this.headers}).pipe(
    catchError(this.handleError('deleteHero'))
  );;
  }

  public updateContact(id: string , payload: string): Observable<any>{
    return this.http.put(
      this.baseUrl + '/contact/' + id,
      payload,
      {headers: this.headers}
      ).pipe(
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

  private handleError(deleteHero: string): any {
    return (p1: any, p2: Observable<any>) => {
      return undefined;
    };
  }
}
