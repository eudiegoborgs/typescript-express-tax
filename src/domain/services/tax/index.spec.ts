import { TaxService } from "./";

const service = new TaxService();

describe("Testing TaxService class", () => {
  it("Testing calculate function", () => {
    const result = service.calculate(10000, 2.2);

    expect(result).toBe("10220.00");
  });
})