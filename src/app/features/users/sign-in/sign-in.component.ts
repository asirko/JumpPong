import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'jp-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: '',
      password: ''
    });
  }

  validate({ value, valid }: { value: any, valid: boolean }): void {
    this.userService
      .signIn$(value.login, value.password)
      .subscribe();
  }

}
