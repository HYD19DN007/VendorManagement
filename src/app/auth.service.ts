import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged:boolean;
  public isAdmin:boolean;
  private baseurl="http://localhost:3005/users?user=";

  user=new User(0,'','');
    
  constructor(private route:Router,private http:HttpClient) 
  {this.isAdmin=false;
   }
  CheckLogin():boolean
  {
     this.isLogged=true;
    return this.isLogged;
  }
  CheckAdmin():boolean
  {
  
    return this.isAdmin;
  }
  getUserByname(name:any):Observable<User[]>
  {
    return this.http.get<User[]>(this.baseurl+name);
  }


}
