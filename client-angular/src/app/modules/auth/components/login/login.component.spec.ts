import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthService} from "../../sevices/auth/auth.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authService: AuthService;
  let authServiceStub: Partial<AuthService>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    authServiceStub = {
      isAuth: false,
    };
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ],
      providers:    [ {provide: AuthService, useValue: authServiceStub },
                      { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
