import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { DonationService } from '../service/donation.service';
@Component({
  selector: 'app-show-donation',
  templateUrl: './show-donation.component.html',
  styleUrls: ['./show-donation.component.css']
})
export class ShowDonationComponent implements OnInit {

  constructor(private route:ActivatedRoute,private donation :DonationService,private router:Router) { }
  id:any;
  data:any;
  Object = Object;
  url='http://127.0.0.1:8000/';

  post=new Post();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getData();
  }
  getData(){
    this.donation.getDonationById(this.id).subscribe(res=>{
      this.data=res;
      this.post=this.data;
      console.log(this.data[0].name_en);

    });
  }
   deleteData(id:any){
    console.log(id);
    this.donation.deletePost(id).subscribe(res=>{
    });
    this.router.navigate(['/delete']);
  }


}
