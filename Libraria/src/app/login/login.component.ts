import { Component, OnInit } from '@angular/core';
import { BaseServicesService } from '../Services/base-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private baseServices : BaseServicesService, private router: Router) { }

  private username: string;
  private password: string;

  ngOnInit() {
  }

   login(username: string, password: string): void {
     //this.baseServices.loginService(username, password);
     this.router.navigate(['/dashboard']);
   }

}
