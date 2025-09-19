import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ILogin} from '../models/ILogin';
import { IUser} from '../models/IUser';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3000/utenti"
userReg:IUser = {} as IUser
authenticated= signal<boolean>(false)
userDataLogin= signal<ILogin[]>([])
userDataReg= signal<IUser[]>([])
userLogin= signal<ILogin>({} as ILogin)




constructor(private http:HttpClient,  private router:Router){
} 

loginData(user: ILogin, ):void {
     this.http.get<ILogin[]>(this.baseUrl).pipe(map(data=>data.filter(u=>u.username === user.username && u.password === user.password))).subscribe(
      data => {if(data.length>0) {this.authenticated.set(true); 
        this.router.navigate(['/firstPage']);
        this.userLogin.set(user)
        console.log("login eseguito", this.authenticated())}
      }
     );

  }

registrationData(user:IUser):void{
 this.http.post<IUser>(this.baseUrl , user ).subscribe(user=>console.log(user))

}

}



