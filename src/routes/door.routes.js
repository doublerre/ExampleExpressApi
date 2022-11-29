import { Router } from "express";
import { save, getDoors } from '../controllers/Door'

const router = Router();

router.post('/door', save);
router.get('/doors', getDoors)

export default router;