import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '../../sevices/auth/auth.service';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

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
      declarations: [ SignupComponent, ],
      providers:    [ {provide: AuthService, useValue: authServiceStub },
                      { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
