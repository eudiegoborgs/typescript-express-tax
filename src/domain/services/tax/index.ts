export interface TaxServiceInterface {
  calculate(amount: number, tax: number): string;
}

export class TaxService implements TaxServiceInterface {
  calculate(amount: number, tax: number): string {
    const total = (1 + tax / 100) * amount;
    return total.toFixed(2);
  }
}