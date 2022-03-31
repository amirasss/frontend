import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationService } from '../service/donation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  Object = Object;
  url='http://127.0.0.1:8000/';
  constructor(private donation:DonationService,private router:Router) { }

  ngOnInit(): void {
    this.getAllDonation();
  }
  getAllDonation(){
    this.donation.getData().subscribe(res=>{
      this.posts= res;
    });
  }
  deleteData(id:any){
    console.log(id);
    this.donation.deletePost(id).subscribe(res=>{
      this.getAllDonation();
    });

  }

}
