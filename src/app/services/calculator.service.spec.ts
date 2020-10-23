import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';


describe('CalculatorService', () => {

    let spy: any, calculator: CalculatorService;

    beforeEach(() => {
        spy = jasmine.createSpyObj('LoggerService', ['log']);

        TestBed.configureTestingModule({
            providers: [CalculatorService, { provide: LoggerService, useValue: spy }]
        });
        calculator = TestBed.inject(CalculatorService);

    })

    it('should add 2 numbers', () => {

        const result = calculator.add(2, 2);

        expect(result).toBe(4);
    })

    it('should subtract 2 numbers', () => {

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0);
    })
});

// Without TestBed

describe('CalculatorService : no TestBed', () => {

    let spy: any, calculator: CalculatorService;

    beforeEach(() => {

        spy = jasmine.createSpyObj('LoggerService', ['log']);
        calculator = new CalculatorService(spy);

    });

    it('should add 2 numbers', () => {

        const result = calculator.add(2, 2);

        expect(result).toBe(4);
    })

    it('should subtract 2 numbers', () => {

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0);
    })
});
















