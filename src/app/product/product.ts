export class Product{
    constructor(public id:number,
                public name:string,
                public description:string,
                public price:number,
                public condition:string,
                public category:string){};
  }

export const Conditions=['New','Used','Discount'];