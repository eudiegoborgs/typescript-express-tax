import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../config/docs/swagger.json";
import { ErrorHandling } from "../../application/middleware/error-handling"; 
import container from '../config/ioc-container';
import routes from './routes';


const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((error) => {
    ErrorHandling.execute(error, req, res, next);
  });
};

const api = express();

api.use(cors({ origin: true }));
api.use(bodyParser.json());

const router = express.Router();
api.use("/", router);
api.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {}));
router.get("/healthcheck", (req, res) => {
  res.json("ok");
});
for (const route of routes) {
  router[route.method.toLowerCase()](route.path, asyncHandler((req, res) => container.get(route.controller)[route.function](req, res)));
}
export default api;
