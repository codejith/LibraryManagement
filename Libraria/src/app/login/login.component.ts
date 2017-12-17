import { Component, OnInit } from '@angular/core';
import { BaseServicesService } from '../Services/base-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private baseServices : BaseServicesService) { }

  private username: string;
  private password: string;

  ngOnInit() {
  }

   login(username: string, password: string): void {
     this.baseServices.loginService(username, password);
   }

}
