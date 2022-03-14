import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import {Register} from 'src/app/models/register.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token:any;
  useData:any;
  email:any;
  name:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.useData=jwt_decode(this.token);
    this.email=this.useData.email;
    this.name=sessionStorage.getItem('hello');
    console.log(this.token);
    console.log(this.useData.email);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
