import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogginService } from './logginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls: LogginService) {}

  email:string='';
  pass:string='';

  ngOnInit(): void {
    this.email='';
    this.pass='';
  }

  login(){
    console.log("email="+this.email+" pass="+this.pass);
    this.ls.login(this.email,this.pass);
  }

}
