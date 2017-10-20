export class Product{
    constructor(public Id:number,
                public Name:string,
                public Description:string,
                public Price:number,
                public Condition:string,
                public Category:string){};
  }

export const Conditions=['New','Used','Discount'];