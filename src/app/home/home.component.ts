import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DonationService } from '../service/donation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  Object = Object;

  constructor(private donation:DonationService) { }

  ngOnInit(): void {
    this.getAllDonation();
  }
  getAllDonation(){
    this.donation.getData().subscribe(res=>{
      this.posts= res;
      
    });
  }

}
