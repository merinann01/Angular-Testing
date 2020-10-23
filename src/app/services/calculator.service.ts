import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  add(n1: number, n2: number) {
    this.logger.log("Addition operation called");
    return n1 + n2;
  }

  subtract(n1: number, n2: number) {
    this.logger.log("Subtraction operation called");
    return n1 - n2;
  }
}
