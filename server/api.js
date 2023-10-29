import { Router } from "express";

const router = Router();

router.post('/register', (req, res, next) => {
    console.log(req.body);
    return res.json({});
});

export default router;

