import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin} from '../models/ILogin';
import { IUser} from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3000"
userLogin: ILogin = {} as ILogin
userReg:IUser = {} as IUser
userDataLogin= signal<ILogin[]>([])
userDataReg= signal<IUser[]>([])


constructor(private http:HttpClient){
}

loginData():Observable<ILogin>{
return this.http.post<ILogin>(this.baseUrl, {username:"ciccio", password:"12345"})
}

registrationData():Observable<IUser>{
return this.http.post<IUser>(this.baseUrl, {username:"ciccio", password:"12345"})
}

}



