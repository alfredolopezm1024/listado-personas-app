import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autentication',
  templateUrl: './autentication.component.html',
  styleUrls: ['./autentication.component.css']
})
export class AutenticationComponent implements OnInit {

  messageError:any='';

  constructor(private router : Router) { 
    const messageError=this.router.getCurrentNavigation()?.extras.state;
    this.messageError=messageError
  }
 // console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'

  ngOnInit(): void {
  }

}
