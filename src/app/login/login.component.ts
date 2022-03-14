import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;
  token: any;
  name:any;
  useData:any;
  useFullData:any;
  user:any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService,
    private router:Router
  ) {}
  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {

    this.loginForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.dataService.login(this.form.value).subscribe((res) => {
      this.data = res;
      if (this.data.status === 1) {
        this.name=sessionStorage.getItem('loggedUser');
        sessionStorage.setItem('hello',this.name);
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/']);
        console.log(this.token);

        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
          timeOut:2000,
          progressBar:true
        });
      } else {
        this.toastr.error(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.code),
          {
            timeOut: 2000,
            progressBar: true,
          }
        );
      }

    });
  }
}
