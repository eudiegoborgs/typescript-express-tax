import { TaxServiceInterface } from "../../../domain/services/tax";

export class TaxController {
  constructor(private readonly service: TaxServiceInterface) {}

  calculate(req, res): void {
    const {tax, amount} = req.body;
    res.json({
      valueWithTaxes: this.service.calculate(amount, tax),
    })
  }
}