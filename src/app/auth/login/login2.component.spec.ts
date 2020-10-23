import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Login2Component } from './login2.component';
import { AuthService } from "../auth.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Component: Login - fixture.detectChanges()', () => {

    let component: Login2Component;
    let fixture: ComponentFixture<Login2Component>;
    let authService: AuthService;
    let el: DebugElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [Login2Component],
            providers: [AuthService]
        });


        fixture = TestBed.createComponent(Login2Component);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);

        //  get the "a" element by CSS selector (e.g., by class name)
        el = fixture.debugElement.query(By.css('a'));
    });

    it('login button hidden when the user is authenticated', () => {

        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();


        expect(el.nativeElement.textContent.trim()).toBe('Login');


        spyOn(authService, 'isAuthenticated').and.returnValue(true);

        expect(el.nativeElement.textContent.trim()).toBe('Login');

        fixture.detectChanges();


        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
});






