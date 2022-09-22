import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginPageComponent } from './login.component';
import { SocialAuthService } from "angularx-social-login";
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import {Observable} from 'rxjs';

describe('DemoComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let socialAuthServiceMock: SpyObj<SocialAuthService>;

  socialAuthServiceMock = createSpyObj('socialAuthService', ['authState', 'initState', 'refreshAuthToken', 'signIn', 'signOut']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      providers: [{ provide: SocialAuthService, useValue: {...socialAuthServiceMock, authState: new Observable()} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});