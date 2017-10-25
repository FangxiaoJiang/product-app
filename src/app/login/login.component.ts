import { Component, OnInit,Input,Output } from '@angular/core';
import { DataService } from '../onetemp/data.service';
import { Router } from '@angular/router';
import { User } from '../registeruser/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public user: User;
 @Input() public isValid: boolean;
 
  constructor(private dataService: DataService, private router: Router) { 

  }

  ngOnInit() {//console.log('\\\\\\\\\\'+this.isValid);
  }
 logIn(){ }



 upDate(email){
   console.log("00000000"+email)
     this.dataService.getUserByEmail(email).subscribe(data=>{
        this.user = data.json();
        this.dataService.middleData(data);
        this.dataService.updateUser( new User(
         
         this.user.userName,
         this.user.email,
         this.user.password,
         this.user.role,
         this.user.gender
       )
       
       )});
       
       
   }




 deleteUser() {
        const user = 'charlie@yahoo.com'
        this.dataService.deleteUser(user);
    }
  
    
}
