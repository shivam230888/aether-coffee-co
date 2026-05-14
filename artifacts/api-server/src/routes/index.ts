import { Router, type IRouter } from "express";
import healthRouter from "./health";
import reservationRouter from "./reservation";

const router: IRouter = Router();

router.use(healthRouter);
router.use(reservationRouter);

export default router;
