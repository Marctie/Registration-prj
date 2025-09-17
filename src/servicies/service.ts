import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../app/models/interface-Login';
import { UserReg } from '../app/models/interface-Reg';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = "http://localhost:3000/login/"
userLogin: UserLogin = {} as UserLogin
userReg:UserReg = {} as UserReg
userDataLogin= signal<UserLogin[]>({} as UserLogin[])
userDataReg= signal<UserReg[]>({} as UserReg[])


constructor(private http:HttpClient){
}

loginData():Observable<UserLogin>{
return this.http.post<UserLogin>(this.baseUrl, {username:"ciccio", password:"12345"})
}

registrationData():Observable<UserReg>{
return this.http.put<UserReg>(this.baseUrl, {username:"ciccio", password:"12345"})
}
}



