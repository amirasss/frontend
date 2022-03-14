import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { DonationService } from '../service/donation.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  post=new Post();
  posts!:any;
  form!: FormGroup;
  constructor(private donation:DonationService,private router:Router) { }

  ngOnInit(): void {
    this.getAllDonation();
  }
  getAllDonation(){
    this.donation.getData().subscribe(res=>{
      this.posts= res;
    });
  }

  insertData(){
    this.donation.insertData(this.post).subscribe(res=>{
      this.getAllDonation();
    });

  }
  alert(){
    alert
  }

}
