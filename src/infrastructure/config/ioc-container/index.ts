import { TaxController } from "../../../application/controllers/tax";
import { TaxService } from "../../../domain/services/tax";

const service = new TaxService();
const tax = new TaxController(service);

const iocContainer = {
  tax,
};

const container = {
  get: key => iocContainer[key]
}

export default container;