import { HttpClient } from "@angular/common/http"
import { Injectable, signal } from "@angular/core"
import { Router } from "@angular/router"
import { map, Observable } from "rxjs"
import { ILogin } from "../models/ILogin"
import { IUser } from "../models/IUser"

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
userBalance= signal<IUser>({} as IUser)





constructor(private http:HttpClient,  private router:Router){
} 

 loginData(user: ILogin, ):void {
     this.http.get<ILogin[]>(this.baseUrl).pipe(map(data=>data.find(u=>u.username === user.username && u.password === user.password))).subscribe(
      datas => {if(datas) {this.authenticated.set(true); 
        this.userLogin.set(datas)
        console.log("login eseguito", this.authenticated(), datas)}
      }
     );
  }

  balanceData(user: IUser, ):void {
     this.http.get<IUser[]>(this.baseUrl).pipe(map(data=>data.filter(u=>u.nome === user.nome && u.cognome === user.cognome))).subscribe(
      data => {if(data.length>0) {this.authenticated.set(true); 
        this.userBalance.set(user)}
        console.log(user, " dovresti vedere nome e cognome ")
      }
     );
  }

  getUser(id:string):Observable<IUser>{
return this.http.get<IUser>(`${this.baseUrl}/${id}`)
  }

registrationData(user:IUser):void{
 this.http.post<IUser>(this.baseUrl , user ).subscribe(user=>console.log(user))

}

}



