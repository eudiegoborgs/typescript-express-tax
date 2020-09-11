import { TaxController } from "./";
import { TaxServiceInterface } from "../../../domain/services/tax";

export class TaxServiceMock implements TaxServiceInterface {
  calculate(amount: number, tax: number): string {
    return "10";
  }
}

const service = new TaxServiceMock();

const controller = new TaxController(service);

describe("Testing TaxController class", () => {
  it("Testing calculate function", () => {
    const req = {
      body: {
        tax: 2.2,
        amount: 10000
      }
    }

    const res = {
      json: data => {
        expect(data).toEqual({valueWithTaxes: "10"});
      }
    }

    const spy = jest.spyOn(res, 'json');

    controller.calculate(req, res);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      {valueWithTaxes: "10"}
    );
  });
})