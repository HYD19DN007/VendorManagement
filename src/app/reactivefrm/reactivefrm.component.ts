import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';
@Component({
  selector: 'app-reactivefrm',
  templateUrl: './reactivefrm.component.html',
  styleUrls: ['./reactivefrm.component.css']
})
export class ReactivefrmComponent implements OnInit {
 U:User[];
  constructor(private service:AuthService) { }
  loginForm=new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  });
  LoginUser()
  {
    this.service.getUserByname(this.loginForm.value.user).subscribe(data=>this.U=data);
    console.log(this.U[0].user+ this.U[0].password);
  }
  ngOnInit(): void {
  }

}
