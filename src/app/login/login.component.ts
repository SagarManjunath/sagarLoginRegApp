import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
) {
  
}

ngOnInit() {
  this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  console.log(this.loginForm);
  if (this.loginForm.invalid) {
      return;
  }
  const userData = JSON.parse(localStorage.getItem('user') || '{}');
  console.log((userData['username']));
  if(userData['username']== this.loginForm.get('username')?.value && userData.password== this.loginForm.get('password')?.value){
    alert('Login success');
    this.router.navigate(['../home'], { relativeTo: this.route });
  }
  else{
    alert('invalid username or password');
  }
}

}
