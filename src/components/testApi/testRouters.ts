import { Router } from "express";
import { PATH } from "src/utils/constants";
import { getTestApiController } from "./testControllers";

export const testRouter = Router();

testRouter.get(PATH.TEST_API.GET, getTestApiController);
