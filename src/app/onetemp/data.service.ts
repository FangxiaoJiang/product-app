import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from '../registeruser/user';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
  url = "http://localhost:3000";
  API_REQUEST_HEADER = new Headers({ 'Content-Type': 'application/json' });
  public userEdit:User;
  public result: any;
  public dataSubject= new Subject<any>();
  constructor(public http: Http) { }

  addUser(user: User): void {
    let body = {
      "userName": user.userName,
      "email": user.email,
      "password": user.password,
      "role": user.role,
      "gender":user.gender

    }
    this.http.post(this.url + '/user/adduser', body).subscribe();


  }


   updateUser(user: User):void{
     let body = {
      "userName": user.userName,
      "email": user.email,
      "password": user.password,
      "role": user.role,
      "gender":user.gender
       }
      this.http.put(this.url+'/user/update/'+user.email,body).subscribe();
   }

   getUserByEmail(email){
   
    return  this.http.get(this.url + '/user/byEmail/' + email);
  }

  checkEmail(email): boolean {
    this.http.get(this.url + '/user/byEmail/' + email).map(result =>
      this.result = result.json().data);
    if (this.result != null) {
      console.log("Email found" + this.result);
      return true;
    }
    else  {
      return false;}

  }

  deleteUser(email): void {
    this.http.delete(this.url + '/user/delete/' + email).subscribe();
  }
   middleData(data){
    
   this.dataSubject.next(data);

  }
  
}
