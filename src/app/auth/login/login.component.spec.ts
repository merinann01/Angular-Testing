import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';

import { LoginComponent } from './login.component';

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);

  });

  it('needsLogin returns true when the user has not been authenticated', () => {

    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();



  });

  it('needsLogin returns false when the user has been authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

});




