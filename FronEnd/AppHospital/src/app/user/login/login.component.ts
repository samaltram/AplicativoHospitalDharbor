import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInterface } from 'src/app/models/userInterface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router, private route: ActivatedRoute
  ) { }

  user: UserInterface = {
    email: '',
    password: ''
  };

  public isError = false;

  ngOnInit() { }

  onLogin(form: NgForm) {
    if (form.valid) {
        console.log(form.value.email);
        sessionStorage.setItem("user", form.value.email );
        let link = ['/home'];
        this.router.navigate(link);
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
