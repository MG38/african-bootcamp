import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any
  password:any

  constructor(private authService:AuthService, private router:Router) { }

  login(formValue:any) {
    this.authService.loginUser(formValue.userName, formValue.password);
    this.router.navigate(["home"]);
  }
  ngOnInit(): void {
  }

}
