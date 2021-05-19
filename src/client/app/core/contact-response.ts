export class Contact {
  constructor(
  public name: string = null ,
  public address: string = null ,
  public phone: string = null ,
  public photoUrl: string  = null ,
  ) {}
}

export class ContactResponse extends Contact{
  constructor(
    // tslint:disable-next-line:variable-name
    public _id: any[],
    public name: string = null,
    public address: string = null,
    public phone: string = null,
    public photoUrl: string = null,
  ){
    super();
  }
}
