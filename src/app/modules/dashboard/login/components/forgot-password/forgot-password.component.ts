import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Response from 'src/app/data/models/Response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  public handlerForgot() {
    this.loginService
      .requestResetPass(this.form.controls.email.value)
      .subscribe((response: Response) => {
        this.form.reset();
        if (response.status === 201) {
          this.toastr.success(response.message);
        }
      },
      (err) => {
        if (err.status === 404) {
            this.toastr.success(err.error.message);
        }
        else {
           this.toastr.success("Estamos enfrentando problemas! Tente novamente mais tarde");
        }
      });
  }
}
