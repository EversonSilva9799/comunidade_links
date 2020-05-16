import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import UserLogin from 'src/app/data/models/UserLogin';
import { LoginService } from '../../services/login.service';
import Response from 'src/app/data/models/Response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public user: UserLogin;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  public handlerLogin(){
    this.user = this.form.value;

    this.loginService.store(this.user).subscribe((response: Response) => {
      console.log(response);
    });

  }

}
