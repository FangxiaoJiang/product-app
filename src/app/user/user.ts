export class User{
    constructor(
    public accountid:String,
    public password:String,
    public firstname:String,
    public lastname:string,
    public gender: 'male'|'female'){}
  }