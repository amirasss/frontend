import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonationService } from '../service/donation.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  data:any;
  url='http://127.0.0.1:8000/';
  constructor(private route:ActivatedRoute,private donation:DonationService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id=this.route.snapshot.params['id'];
    this.getData();
  }
getData(){
  this.donation.getDonationById(this.id).subscribe(res=>{
    console.log(res);
    this.data=res;
  });
}

updatePost(){
  this.donation.updatePoste(this.id,this.data).subscribe(res=>{

  })
}

}
