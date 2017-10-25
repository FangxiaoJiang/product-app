import { Component, OnInit,Input,Output,ViewChild } from '@angular/core';
import { User } from './user';
import { DataService } from '../onetemp/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-registeruser',
    templateUrl: './registeruser.component.html',
    styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
    @ViewChild('f') form:NgForm;
    public user: User;
   @Output() public isValid: boolean;
    public emailExist: boolean;
    public userFromDB: any;

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.user = {
            userName: '',
            email: '',
            password: '',
            role: '',
            gender:''
        }
    //     this.dataService.dataSubject.subscribe(
    //       data=>{
    //           this.user = data.json();
    //          console.log("ppppp"+data);
    //          this.router.navigate(["register"]);
             

    //       }
    //   );
    }

    save(user: User, isValid: boolean) {
        this.isValid = isValid;
        this.dataService.getUserByEmail(user.email).subscribe(
            (data) => {
                this.userFromDB = data.json();
                if(this.userFromDB != null){
                    this.emailExist = true;
                    console.log("User with email already exist, please try another email.");
                }
                else if(isValid){
                    this.emailExist=false;
                    console.log("User added successfully!");
                    this.dataService.addUser(new User(
                        user.userName,
                        user.email,
                        user.password,
                        user.role,
                        user.gender
                    ));
                     //this.form.reset();
                    //this.router.navigate(["login"]);
                }
                console.log(this.userFromDB);
               
            });

             
    };


//    getMiddleData(){
      
//    }



    
}
