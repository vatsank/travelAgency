import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;
  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }
  submit() {
        const name = this.loginForm.controls.userName.value;
        const passWord = this.loginForm.controls.passWord.value;

        if (name === 'india' && passWord === 'india') {
         this.router.navigate(['/holidays']);
         sessionStorage.setItem('isUserLogged','true');
        } else {
          this.router.navigate(['/login']);
        }
        
        console.log('staus' + this.loginForm.status);

  }
}
