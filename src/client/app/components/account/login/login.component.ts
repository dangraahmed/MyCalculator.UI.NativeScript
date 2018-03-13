// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService, ILoginState } from '../../../modules/login';

@Component({
    moduleId: module.id,
    selector: 'cal-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    public loginForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder, private loginServices : LoginService) {
            this.createLoginForm();
    }

    createLoginForm() {
        // TODO : refactoring required remove duplicate code
            this.loginForm = this._formBuilder.group({
                'userId': ['a', Validators.required],
                'password': ['s', Validators.required]
            });
    }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

    login() {
        this.loginServices.login(this.loginForm);
    }

}
