import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'explore-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    // LOGIN
    console.log(this.user);
  }
}
