import {Pipe, PipeTransform} from '@angular/core';
import {User} from "./user";

@Pipe({
    name:'FN'
})
export class FirstNamePipe implements PipeTransform{
    transform(user:User):String{
        if(!user)
            return null;
        switch(user.gender){
            case "male":
                return 'Mr.'+user.userName;
            case "female":
                return 'Ms.'+user.userName;
        }
    }
}