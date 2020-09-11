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

  it("Testing calculate function without data", () => {
    const req = {
      body: {}
    }

    const res = {}

    expect(() => controller.calculate(req, res)).toThrowErrorMatchingSnapshot();
  });

  it("Testing calculate function without amount", () => {
    const req = {
      body: {
        tax: 2.2,
      }
    }

    const res = {}

    expect(() => controller.calculate(req, res)).toThrowErrorMatchingSnapshot();
  });

  it("Testing calculate function without amount", () => {
    const req = {
      body: {
        amount: 10000,
      }
    }

    const res = {}

    expect(() => controller.calculate(req, res)).toThrowErrorMatchingSnapshot();
  });

  it("Testing calculate function with amount", () => {
    const req = {
      body: {
        amount: 10000,
      }
    }

    const res = {}

    expect(() => controller.calculate(req, res)).toThrowErrorMatchingSnapshot();
  });
})