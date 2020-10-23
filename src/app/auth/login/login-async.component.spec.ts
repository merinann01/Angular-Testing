import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { LoginAsyncComponent } from './login-async.component';
import { AuthAsyncService } from "../auth-async.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Component: Login - Async', () => {

    let component: LoginAsyncComponent;
    let fixture: ComponentFixture<LoginAsyncComponent>;
    let authService: AuthAsyncService;
    let el: DebugElement;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [LoginAsyncComponent],
            providers: [AuthAsyncService]
        });


        fixture = TestBed.createComponent(LoginAsyncComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthAsyncService);

        el = fixture.debugElement.query(By.css('a'));
    });


    it('Button label to be Logout via fakeAsync() and tick()', fakeAsync(() => {

        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');

        spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

        component.ngOnInit();
        // Simulates the passage of time until all pending asynchronous activities complete
        tick();

        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    }));


    it('Button label via async() and whenStable()', async(() => {
        // async() knows about all the pending promises defined in it's function body.
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

        fixture.whenStable().then(() => {
            // This is called when ALL pending promises have been resolved
            fixture.detectChanges();
            expect(el.nativeElement.textContent.trim()).toBe('Logout');
        });

        component.ngOnInit();

    }));

    it('Button label via jasmine.done', (done: DoneFn) => {
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');

        let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();

        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges();
            expect(el.nativeElement.textContent.trim()).toBe('Logout');
            done();

        });
    });







});

// fixture.whenStable().then(() => {
//     fixture.detectChanges();
//     expect(el.nativeElement.textContent.trim()).toBe('Logout');
// });

// component.ngOnInit();