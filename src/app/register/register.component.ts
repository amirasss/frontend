import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmed.validators';
import { DataService } from '../service/data.service';

import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm() {
    this.form = this.formBuilder.group(
      {
        name: [null, Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [null, Validators.required],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.submitted = true;
    // console.log(this.form.value.name);

    if (this.form.invalid) {
      return;
    }
    this.dataService.registerUser(this.form.value).subscribe((res) => {
      this.data = res;
      if (this.data.status === 1) {
        sessionStorage.setItem('loggedUser',this.form.value.name);
        this.route.navigate(['/']);
        this.toastr.success(
          JSON.stringify(this.data.message),
          JSON.stringify(this.data.code),
          {
            timeOut: 2000,
            progressBar: true,
          }
        );
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
      this.submitted = false;
      this.form.get('name')?.reset();
      this.form.get('email')?.reset();
      this.form.get('phone')?.reset();
      this.form.get('password')?.reset();
      this.form.get('confirmPassword')?.reset();
    });
  }
}
