import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  messageError:any='';

  constructor(private router : Router) { 
    const messageError=this.router.getCurrentNavigation()?.extras.state;
    this.messageError=messageError
  }

  ngOnInit(): void {
  }

}
