import { Component, OnInit } from '@angular/core';
import { DonationService } from '../service/donation.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { Post } from '../models/post';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  files:any;
  submitted =false;
  form!:FormGroup;
  data:any=null;
  constructor(
    private donation: DonationService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form=this.formBuilder.group({
      name_en:[null,Validators.required],
      name_ar:[null,Validators.required],
      desc:[null,Validators.required],
      address:[null,Validators.required],
      phone:[null,Validators.required],
      img:[null,Validators.required]
    });
  }
  get f(){
    return this.form.controls;
  }
  uploadImage(event:any){
    this.files=event.target.files[0];
    console.log(this.files);

  }
  onSubmit(){
    this.submitted=true;
    if (this.form.invalid) {
        return;
    }
    const formData=new FormData();
    formData.append('img',this.files,this.files.name);
    formData.append('name_en',this.form.value.name_en);
    formData.append('name_ar',this.form.value.name_ar);
    formData.append('desc',this.form.value.desc);
    formData.append('address',this.form.value.address);
    formData.append('phone',this.form.value.phone);
    this.donation.insertData(formData).subscribe(res =>{
      this.data=res;
      console.log(this.data);
      if (this.data.status=true) {
        this.toastr.success(JSON.stringify(this.data.message),'',{
          timeOut:2000,
          progressBar:true
        });
      }else{
        this.toastr.error(JSON.stringify(this.data.message),'',{
          timeOut:2000,
          progressBar:true
        });


      }
      this.submitted=false;
      this.form.get('img')?.reset();
      this.form.get('name_en')?.reset();
      this.form.get('name_ar')?.reset();
      this.form.get('phone')?.reset();
      this.form.get('desc')?.reset();
      this.form.get('address')?.reset();
    });
  }
}
