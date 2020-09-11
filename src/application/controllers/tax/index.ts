import Joi from 'joi';
import { TaxServiceInterface } from "../../../domain/services/tax";

export class TaxController {
  constructor(private readonly service: TaxServiceInterface) {}

  calculate(req, res): void {
    const schema = Joi.object({
      tax: Joi.number().required(),
      amount: Joi.number().required(),
    })
    const {tax, amount} = req.body;
    const result = schema.validate({tax, amount});
    if (result.error) {
      throw {code: 403, message: result.error}
    }
    res.json({
      valueWithTaxes: this.service.calculate(amount, tax),
    })
  }
}