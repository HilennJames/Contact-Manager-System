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
    public id: any[],
    public name: string = null,
    public address: string = null,
    public phone: string = null,
    public photoUrl: string = null,
  ){
    super();
  }
}
