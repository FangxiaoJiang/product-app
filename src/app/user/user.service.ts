import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http:HttpClient){};
  url="http://localhost:3000/api/User";
  isLogin:boolean;
  currentAccountId:String;
  currentPassword:String;
  currentUser:User;

  comfirm(accountid:String,password:String):Observable<boolean>{
    return this.http.get(this.url+'/'+accountid+'/'+password).map(
      value=>{
        if(value){
          this.currentAccountId=accountid;
          this.currentPassword=password;
          this.currentUser=(value as User);
          this.isLogin=true;
        }
        else
          this.isLogin=false;
        return this.isLogin;
        }
    )
  }

  getLoginState(){
    return this.isLogin;
  }

  getAdminState(){
    if(this.isLogin)
      if(this.currentAccountId=="Jiang")
        return true;
    return false;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  setLoginState(){
    this.currentAccountId=null;
    this.currentPassword=null;
    this.currentUser=null;
    this.isLogin=false;
  }
  
  getUser(usercount:String):Observable<User>{
      return this.http.get(this.url+'/'+usercount).map(
        value=>{
          if(value)
            return new User(
              (value as User).accountid,
              (value as User).password,
              (value as User).firstname,
              (value as User).lastname,
              (value as User).gender
          )}
      )
  }


  addProduct(p:User):void{
    let body={
      "usercount":p.accountid,
      "password":p.password,
      "firstname":p.firstname,
      "lastname":p.lastname,
      "gender":p.gender,
    }
    this.http.post(this.url,body).subscribe();
  }

  updateProduct(p:User):void{
    let body={
      "usercount":p.accountid,
      "password":p.password,
      "firstname":p.firstname,
      "lastname":p.lastname,
      "gender":p.gender,
    }
    this.http.put(this.url+'/'+p.accountid,body).subscribe();   
  }

  deleteProduct(p:User):void{
    this.http.delete(this.url+'/'+p.accountid).subscribe();   
  }
}