import { Router } from "express";
import { save } from '../controllers/Door'

const router = Router();

router.get('/doors', save);

export default router;